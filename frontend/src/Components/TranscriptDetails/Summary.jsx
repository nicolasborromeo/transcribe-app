import { useState, useEffect} from "react"

export default function Summary({response}) {
    const [summary, setSummary] = useState(null)

    useEffect(()=>{
        if(response){
            setSummary(response['results']['summary']['short'])
        } else {
            setSummary(null)
        }
    }, [response, summary])

    if (summary) return (
        <div>
            <p>Summary:</p>
            <p>{summary}</p>
        </div>
    )
}
