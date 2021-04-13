import React, {useState} from "react";
import {RatingPropsType, UnControlledRating} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'uncontrolled components/Uncontrolled Rating Stories',
    component: UnControlledRating
}

const Template: Story<RatingPropsType> = (args) => <UnControlledRating {...args} />

const callBack = action("changing inside component")

export const EmptyRating = Template.bind({})
EmptyRating.args = {
    defaultValue: 0,
    onChange: callBack
}

export const ThreeRating = Template.bind({})
ThreeRating.args = {
    defaultValue: 3,
    onChange: callBack
}

