import React, {Dispatch, SetStateAction, useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";
import {reducer} from "./reducer";

export type UnControlledAccordionPropsType = {
    titleValue: string
}


export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    // const [collapsed, setCollapsed] = useState<boolean>(false);
    const [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            {/*<AccordionTitle onClick={() => {setCollapsed(!collapsed)}} title={props.titleValue}/>*/}
            <AccordionTitle onClick={() => {
                dispatch({type: 'TOGGLE-COLLAPSED'})
            }} title={props.titleValue}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type UnControlledAccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: UnControlledAccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
