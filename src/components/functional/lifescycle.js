import React, { useEffect, useState } from 'react'
import WindowPosition from './windowPosition'
export default function Lifescycle() {
    const [state, setState] = useState(true);
    console.log('initializing')

    //will work if anything in this function changed
    useEffect(() => {
        console.log("zero useEffect")
    })

    //will work only one time
    useEffect(() => {
        console.log("first useEffect")
    }, [])

    //will work depending on the parameter
    useEffect(() => {
        console.log("secound useEffect")
    }, [state, setState])


    useEffect(() => {
        console.log("third useEffect")
    }, [setState])

    return (
        <div>
            {console.log("component has beed rendered")}
            {state ? "true" : 'false'}
            <button
                onClick={() => setState(false)}>
            </button>
            {state && <WindowPosition />}
        </div>
    )
}
