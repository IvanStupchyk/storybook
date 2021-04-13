import React, {useState} from "react";
import s from "./OnOff.module.css";

export type OnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        marginRight: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20px',
        width: '30px',
        border: '1px #000 solid',
        backgroundColor: on ? 'green' : ''
    };
    const offStyle = {
        marginRight: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20px',
        width: '30px',
        border: '1px #000 solid',
        backgroundColor: !on ? 'red' : ''
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red'
    };

    const OnClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const OffClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div className={s.switch}>
            <div style={onStyle} onClick={OnClicked}>On</div>
            <div style={offStyle} onClick={OffClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
