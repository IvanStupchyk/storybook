import React, {ChangeEvent, useRef, useState} from "react";
import {Story} from "@storybook/react";
import {UnControlledInput, UnControlledInputPropsType} from "./UnControlledInput";


export default {
    title: 'uncontrolled components/Uncontrolled Input',
    component: UnControlledInput
}

const Template: Story<UnControlledInputPropsType> = (args) => <UnControlledInput {...args} />


export const ModeChanging: Story<UnControlledInputPropsType> = (args) => {
    const [value, setValue] = useState<string>("")
    const getValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <UnControlledInput value={value} onChange={getValue} />
}

export const RefInput = () => {
    const [value, setValue] = useState<string>("")
    const InputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = InputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div>
            <input ref={InputRef}/>
            <button onClick={save}>x</button>
            {value}
        </div>
    )
}


