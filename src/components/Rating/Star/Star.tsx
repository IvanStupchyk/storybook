import React from "react";
import {RatingValueType} from "../Rating";

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

const Star = React.memo(StarSecret)

function StarSecret(props: StarPropsType) {
    return <span onClick={() => {
        props.onClick(props.value)
    }}>{props.selected ? <b>star </b> : "star "}</span>
}

export default Star;