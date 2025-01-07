import { useEffect, useState } from "react"
import { getPainPoints } from "../../../utils"

export default function Sentiment({response}) {
    const [sentiment, setSentiment] = useState(null)
    const [painPoints, setPainPoints] = useState([])

    useEffect(()=>{
        if(response){
            setSentiment(response['results']['sentiments']['average']['sentiment'])
            setPainPoints(getPainPoints(response))
        } else {
            setSentiment(null)
        }
    }, [response, sentiment])

    if (sentiment) return (
        <div>
            <span>The average sentiment is: {sentiment}</span>
            {painPoints && <p>Customer&apos;s biggest pain points are:</p>}
            {painPoints && painPoints?.map((text, index)=> (
                <p key={index}>&quot;<em>{text}</em>&quot;</p>
            ))}
        </div>
    )
}
