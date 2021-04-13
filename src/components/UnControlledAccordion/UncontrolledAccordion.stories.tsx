import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UnControlledAccordion, UnControlledAccordionPropsType} from "./UnControlledAccordion";
import {Story} from "@storybook/react";

export default {
    title: 'uncontrolled components/Uncontrolled Accordion',
    component: UnControlledAccordion
}

const Template: Story<UnControlledAccordionPropsType> = (args) => <UnControlledAccordion {...args} />

export const ChangingMode = Template.bind({})
ChangingMode.args = {
    titleValue: "user"
}


