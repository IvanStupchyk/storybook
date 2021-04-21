import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    /**
     * show collapsed or not collapsed accordion
     */
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void

}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick }/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = React.memo(AccordionBodySecret)

function AccordionBodySecret(props: AccordionBodyPropsType) {
    return (
        <ul>
            {
                props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)
            }
        </ul>
    )
}
