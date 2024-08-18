import { ChangeEvent, FC } from 'react'

interface InputProps { 
    type: string;
    value: string;
    label: string;
    name: string;
    placeholder: string; 
    id: string;
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC <InputProps> = ({type, value, name, placeholder, id, label, handleOnChange}) => {
    return (
        <label>{label}
            <input type={type} value={value} name={name} placeholder={placeholder} id={id} onChange={handleOnChange}/>
        </label>
    )
}