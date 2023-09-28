import React from 'react'

interface Props {
    onClick?: () => void
    name: string
}

const Button = ({ onClick, name }: Props) => {
    return (
        <button type='submit' onClick={onClick} className='px-4 py-2 bg-black rounded-md text-white'>{name}</button>
    )
}

export default Button