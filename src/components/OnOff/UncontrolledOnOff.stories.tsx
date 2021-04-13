import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnOff, OnOffPropsType} from "./OnOff";
import {Story} from "@storybook/react";

export default {
    title: 'uncontrolled components/Uncontrolled OnOff ',
    component: OnOff
}

const callBack = action("on or odd clicked")

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />

export const OnMode = Template.bind({})
OnMode.args = {
    defaultOn: true,
    onChange: callBack
}

export const OffMode = Template.bind({})
OffMode.args = {
    defaultOn: false,
    onChange: callBack
}

export const DefaultInputValue = () => <input defaultValue={'df'} />


