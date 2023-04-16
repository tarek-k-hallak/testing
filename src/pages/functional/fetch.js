import React, { useEffect, useState } from 'react'

export default function Fetch() {
    const [randomDataJSON, setRandomDataJSON] = useState('')
    const URL = "https://www.boredapi.com/api/"

    const randomData = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    };

    const randomData2 = async () => {
        try {
            const response = await fetch(URL)
            const json = await response.json()
            console.log(json)
            return json
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        console.log("befor")
        setRandomDataJSON(randomData2())
        console.log("after")
    }, [])

    return (
        <div>
            Fetch
        </div>
    )
}
