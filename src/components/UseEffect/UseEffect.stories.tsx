import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {KeysTrackerExample, UseEffect} from "./UseEffect";
import {Story} from "@storybook/react";

export default {
    title: 'UseEffect',
    component: KeysTrackerExample
}

const callBack = action("UseEffect mode changed")
const onClickCallBack = action("some item was clicked")

const Template: Story = (args) => <KeysTrackerExample {...args} />


export const UseEffectExample = Template.bind({})
UseEffectExample.args = {

};


