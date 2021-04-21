import React, {useState} from "react";
import s from "./ControlledOnOff.module.css";

export type OnOffPropsType = {
    value: boolean
    onClick: (value: boolean) => void
}

export const ControlledOnOff = React.memo(ControlledOnOffSecret)

function ControlledOnOffSecret(props: OnOffPropsType) {
    // let [on, setOn] = useState(false);

    const onStyle = {
        marginRight: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20px',
        width: '30px',
        border: '1px #000 solid',
        backgroundColor: props.value ? 'green' : ''
    };
    const offStyle = {
        marginRight: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20px',
        width: '30px',
        border: '1px #000 solid',
        backgroundColor: !props.value ? 'red' : ''
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: props.value ? 'green' : 'red'
    };

    return (
        <div className={s.switch}>
            <div style={onStyle} onClick={() => {props.onClick(true)}}>On </div>
            <div style={offStyle} onClick={() => {
                props.onClick(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
