import { useState } from "react"

import '../css/input.css'

export const InputPais = ({ newValue }) => {

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault();
        newValue(input);
        setInput('');
    }

    return (

        <form onSubmit={handleForm} className="input-form">
            <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                placeholder="Ingresa un Pais"
                name="pais"
                value={input}
            />
        </form>
    )
}
