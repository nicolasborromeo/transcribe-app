import { useEffect, useState } from "react"

export default function TranscriptDetails() {
    const [response, setResponse] = useState()
    const [fetched, setFetched] = useState(false)

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/transcribe/')
                if (!res.ok) {
                    throw new Error('Error fetching data')
                }
                const data = await res.json()
                setResponse(data)
            } catch (error) {
                console.log('ERROR: ', error)
            } finally {
                setFetched(true)
            }
        }
        fetchData()
    }, [])


    if (!fetched) return (
        <div>
            Loading...
        </div>
    )
    if (fetched) return (
        <div>
            <h1 className="page-h1">Transcript Details</h1>
            <input type="file"/>
            <div className="transcript-white-canvas">
                <p>Your transcript goes here</p>
                <div>
                    {response.message}
                </div>
            </div>
        </div>
    )
}
