import React, {ChangeEvent, useState} from "react";

export type UnControlledInputPropsType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UnControlledInput = React.memo(UnControlledInputSecret)

function UnControlledInputSecret(props: UnControlledInputPropsType) {
    const [value, setValue] = useState<string>("");
    const getValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input value={value} onChange={getValue}/>
            <p>{value}</p>
        </div>
    )
}




