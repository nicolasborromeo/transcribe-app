import { useState } from "react"
import Transcript from "./Transcript"
import Sentiment from "./Sentmient"
import Summary from "./Summary"

export default function TranscriptDetails() {
    const [loadingTranscript, setLoadingTranscript] = useState(false)
    const [response, setResponse] = useState(null)

    const getTranscript = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target) //creating fromData to be able to send files

        setResponse(null)
        setLoadingTranscript(true)
        try {
            const res = await fetch('/api/transcribe/', {
                method: "POST",
                body: formData
            })
            if (!res.ok) {
                throw new Error('Error transcribing audio')
            }
            const data = await res.json()
            console.log(data)
            setResponse(data)

        } catch (error) {
            console.log('ERROR: ', error)
        } finally {
            setLoadingTranscript(false)
        }
    }

    return (
        <div>
            <h1 className="page-h1">Transcript Details</h1>
            <form
                method="POST"
                onSubmit={getTranscript}
                encType="multipart/form-data">
                <input
                    type="file"
                    name="audio"
                    accept=".mp3/.wav"
                />
                <button type="submit">Get Transcript</button>
            </form>
            {loadingTranscript ?
                (
                    <p>Transcribing...</p>
                ) : (
                    <div className="transcript-white-canvas">
                        <Transcript response={response} />
                        <Summary response={response} />
                        <Sentiment response={response} />
                    </div>
                )
            }
        </div>
    )
}
