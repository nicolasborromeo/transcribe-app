export const getPainPoints = (transcript) => {
    const segments = transcript['results']['sentiments']['segments']
    const paintPoints = []
    try {
        for (let segment in segments) {
            if(segments[segment]['sentiment'] == 'negative'){
                paintPoints.push(segments[segment]['text'])
            }
        }
        return paintPoints
    } catch (error) {
        console.log('Error: ', error)
    }
}
