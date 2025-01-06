

export default function TranscriptDetails() {

    const getTranscript = async (e) => {
        e.preventDefault()
        console.log(e.target)
        const formData = new FormData(e.target)

        try {
            const res = await fetch('/api/transcribe/', {
                method: "POST",
                body: formData
            })
            if (!res.ok) {
                throw new Error('Error transcribing audio')
            }
            const data = await res.json()
            console.log('response data: ',data)
        } catch (error) {
            console.log('ERROR: ', error)
        }
    }




    return (
        <div>
            <h1 className="page-h1">Transcript Details</h1>
            <form method="POST" onSubmit={getTranscript} encType="multipart/form-data">
                <input
                    type="file"
                    name="audio"
                    accept=".mp3/.wav/.mp4"
                />
                <button type="submit">Get Transcript</button>
            </form>
            <div className="transcript-white-canvas">
                <p>Your transcript goes here</p>
                <div>
                    {/* {response.message} */}
                </div>
            </div>
        </div>
    )
}
