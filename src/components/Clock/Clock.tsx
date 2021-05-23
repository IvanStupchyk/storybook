import React, {useEffect, useState} from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const getTime = (time: number) => {
        return time < 10 ? `0${time}` : time
    }
    return (
        <div>
            <span>{getTime(date.getHours())}:</span>
            <span>{getTime(date.getMinutes())}:</span>
            <span>{getTime(date.getSeconds())}</span>
        </div>
    )
}
