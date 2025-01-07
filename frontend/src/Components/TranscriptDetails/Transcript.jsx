import { useEffect, useState } from "react"

export default function Transcript({response}){
    const [transcript, setTranscript] = useState(null)
    useEffect(()=>{
            if(response){
                setTranscript(response['results']['channels'][0]['alternatives'][0]['transcript'])
            } else {
                setTranscript(null)
            }
        }, [response, transcript])


    if (transcript) {
        return (
            <p>{transcript}</p>
        )
    }
}
