import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {Select, SelectPropsType} from "./Select";

export default {
    title: 'controlled components/select',
    component: Select
}

const callBack = action("UseEffect mode changed")
const onClickCallBack = action("some item was clicked")

const Template: Story<SelectPropsType> = (args) => <Select {...args} />

const callbackProps = {
    onChange: callBack
}

export const SelectChange: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState<any>(42)
    return <Select {...args}
                   value={value}
                   onChange={setValue}
    />
}
SelectChange.args = {
    items: [{title: "Vanya", value: 42}, {title: "Valera", value: 33}, {title: "Artem", value: 12}]
}



export const SelectWithoutValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState<any>(null)
    return <Select {...args}
                   value={value}
                   onChange={setValue}
    />
}
SelectWithoutValue.args = {
    items: [{title: "Vanya", value: 42}, {title: "Valera", value: 33}, {title: "Artem", value: 12}]
}


