import React, {useEffect, useState} from "react";

export const UseEffect = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetTimeOutExample')

    useEffect(() => {
        console.log('Effect occurred' + counter)

        return () => {
            console.log('reset effect')
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return (
        <div>
            Hello, counter: {counter} <button onClick={increase}>+</button>
        </div>
    )
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')



    console.log('Component rendered with' + text)

    useEffect(() => {
        const InputText = (e: KeyboardEvent) => {
            console.log('Effect occurred' + text)
            setText(text => text + e.key)
        }

        window.document.addEventListener('keypress', InputText)

        return () => {
            window.document.removeEventListener('keypress', InputText)
        }
    }, [])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}