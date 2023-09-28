import React from 'react'

interface Props {
    onChange: (value: string) => void
    value: string;
    placeHolder?: string
}

const Input = ({ value, onChange, placeHolder }: Props) => {
    return (
        <input required className='w-full px-4 py-2 border rounded-md' value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeHolder} />
    )
}

export default Input