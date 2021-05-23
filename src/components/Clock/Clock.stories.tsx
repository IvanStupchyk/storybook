import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Clock} from "./Clock";
import {Story} from "@storybook/react";

export default {
    title: 'clock/UseEffect',
    component: Clock
}

const callBack = action("UseEffect mode changed")
const onClickCallBack = action("some item was clicked")

const Template: Story = (args) => <Clock {...args} />




export const ClockExample = Template.bind({})
ClockExample.args = {

};


