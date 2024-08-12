import { ChangeEvent, FC } from 'react'

interface InputProps { 
    label: string;
    name: string;
    placeholder: string; 
    id: string;
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC <InputProps> = ({name, placeholder, id, label, handleOnChange}) => {
    return (
        <label>{label}
            <input name={name} placeholder={placeholder} id={id} onChange={handleOnChange}/>
        </label>
    )
}