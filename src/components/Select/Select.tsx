import React, {KeyboardEvent, useEffect, useState} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(v => v.value === props.value)
    const hoveredItem = props.items.find(v => v.value === hoveredElementValue)

    useEffect( () => {
        setHoveredElementValue(props.value)
        }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        setActive(false)
    }


    const OnKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretenderElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretenderElement) {
                        props.onChange(pretenderElement.value)
                        return
                    }
                }
            }
            if (selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    // if (props.items[i].value === hoveredElementValue) {
    //     if (e.key === 'ArrowDown') {
    //         if (props.items[i].value === props.items[props.items.length - 1].value) {
    //             break
    //         }
    //         props.onChange(props.items[i + 1].value)
    //         setHoveredElementValue(props.items[i + 1].value)
    //         break
    //     }
    //     if (e.key === 'ArrowUp') {
    //         if (props.items[i].value === props.items[0].value) {
    //             break
    //         }
    //         props.onChange(props.items[i - 1].value)
    //         setHoveredElementValue(props.items[i - 1].value)
    //         break
    //     }
    // }

    return (
        <div className={s.select} onKeyUp={OnKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
            <div className={s.items}>
                {props.items.map(i => <div onMouseEnter={() => setHoveredElementValue(i.value)}
                                           className={`${s.item} ${hoveredItem === i ? s.selected : ''}`} key={i.value}
                                           onClick={() => {
                                               onItemClick(i.value)
                                           }}>
                    {i.title}</div>)}
            </div>
            }
        </div>
    )
}

// onClick={() => {props.onChange(i.title)}}