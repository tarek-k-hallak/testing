import React, { useEffect, useState } from 'react'

export default function WindowPosition() {
    const [position, setPosition] = useState("")

    const printPosition = (e) => {
        setPosition(`x: ${e.clientX} / Y: ${e.clientY}`)
        console.log("mouse event tregerd")
    }

    useEffect(() => {
        window.addEventListener("mousemove", printPosition)
    }, [])

    return (
        <div>
            {position}
        </div>
    )
}
