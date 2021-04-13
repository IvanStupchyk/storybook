import React, {useState} from "react";
import {ControlledOnOff, OnOffPropsType} from "./ControlledOnOff";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'controlled components/OnOff ',
    component: ControlledOnOff
}

const Template: Story<OnOffPropsType> = (args) => <ControlledOnOff {...args} />

const callBack = action("on or odd clicked")

export const OnMode = Template.bind({})
OnMode.args = {
    value: true,
    onClick: callBack
};

export const OffMode = Template.bind({})
OffMode.args = {
    value: false,
    onClick: callBack
};

export const ModeChanging: Story<OnOffPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false)
    return <ControlledOnOff {...args} value={value} onClick={setValue} />
}

