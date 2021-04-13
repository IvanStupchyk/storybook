import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'controlled components/Accordion',
    component: Accordion
}

const callBack = action("Accordion mode changed")
const onClickCallBack = action("some item was clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

const callbackProps = {
    onChange: callBack
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value}
                      onChange={() => setValue(!value)}

    />
}
ModeChanging.args = {
    titleValue: "Users",
    items: [{title: "Vanya", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}],
    onClick: onClickCallBack
}


export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...callbackProps,
    titleValue: "Menu",
    collapsed: true,
    items: []
};

export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    ...callbackProps,
    titleValue: "users",
    collapsed: false,
    items: [{title: "Vanya", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}]
};


