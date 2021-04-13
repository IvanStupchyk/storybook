import React from "react";

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {props.setValue()}}>{props.selected ? <b>star </b> : "star "}</span>
}

export default Star;