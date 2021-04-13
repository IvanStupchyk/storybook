import React from "react";
import Star from "./Star/Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star onClick={props.onClick} selected={props.value > 0} value={1}/>
            <Star onClick={props.onClick} selected={props.value > 1} value={2}/>
            <Star onClick={props.onClick} selected={props.value > 2} value={3}/>
            <Star onClick={props.onClick} selected={props.value > 3} value={4}/>
            <Star onClick={props.onClick} selected={props.value > 4} value={5}/>
        </div>
    )
}

export default Rating;