import React, {KeyboardEvent, useEffect, useMemo, useState} from "react";
import s from "./Select-example.module.css"

export default {
    title: 'Training react and use memo'
}

type CitiesType = {
    title: string
    value: number
    population: string
    country_id: number
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: CitiesType[]
}

const SelectSecret = (props: SelectPropsType) => {
    console.log('render Select')
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(v => v.value === props.value)
    const hoveredItem = props.items.find(v => v.value === hoveredElementValue)

    useEffect(() => {
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

const Users = React.memo(SelectSecret)

export const ResultSelects = () => {
    console.log('result select')
    const [cities, setCities] = useState<Array<CitiesType>>([
        {title: 'Tokyo', value: 45, population: '30000000', country_id: 4},
        {title: 'Moscow', value: 12, population: '15000000', country_id: 2},
        {title: 'Minsk', value: 10, population: '1900000', country_id: 1},
        {title: 'Paris', value: 22, population: '11000000', country_id: 3},
        {title: 'Molodechno', value: 31, population: '90000', country_id: 1},
        {title: 'Brest', value: 42, population: '350000', country_id: 1}
    ])

    const [counter, setCounter] = useState(0)

    const newArrayM = useMemo(() => {
        return cities.filter(c => c.title[0].toLowerCase() === 'm')
    }, [cities])
    const [valueM, setValueM] = useState(newArrayM[0].value)

    const newArrayFromOneCountry = useMemo(() => {
        return cities.filter(c => c.country_id === 1)
    }, [cities])
    const [valueFromOneCountry, setValueFromOneCountry] = useState(newArrayFromOneCountry[0].value)

    const newArrayWithBigPopulation = useMemo(() => {
        return cities.filter(c => +c.population > 10000000)
    }, [cities])
    const [valueBig, setValueBig] = useState(newArrayWithBigPopulation[0].value)

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Users value={valueM} onChange={setValueM} items={newArrayM}></Users>
                <Users value={valueFromOneCountry} onChange={setValueFromOneCountry} items={newArrayFromOneCountry}></Users>
                <Users value={valueBig} onChange={setValueBig} items={newArrayWithBigPopulation}></Users>
                <div>
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                    {counter}
                </div>
            </div>
        </div>
    )
}

