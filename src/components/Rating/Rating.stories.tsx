import React, {useState} from "react";
import Rating, {RatingPropsType, RatingValueType} from "./Rating";
import {Story} from "@storybook/react";

export default {
    title: 'controlled components/Rating Stories',
    component: Rating
}

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />


export const EmptyRating = Template.bind({})
EmptyRating.args = {
    value: 0,
    onClick: x=>x
};

export const ThreeRating = Template.bind({})
ThreeRating.args = {
    value: 3,
    onClick: x=>x
};



export const ChangeRating: Story<RatingPropsType> = (args) => {
    const [rating, setRating] = useState<RatingValueType>(0)

    return <Rating {...args} value={rating} onClick={setRating} />
}