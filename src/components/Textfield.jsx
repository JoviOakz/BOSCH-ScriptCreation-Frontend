import { useState } from 'react'

export default function Textfield({ children }) {
    const [value, setValue] = useState('');

    return (
        <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={children}
            className='w-[90%] bg-white rounded-lg p-4 shadow-xl'>
        </input>
    )
}