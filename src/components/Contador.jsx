import React, { useState } from 'react'

const Contador = (props) => {

    const [contador, setContador] = useState(props.inicial);

    const aumentar = () => {
        setContador((actual) => actual + 1)
    }

    const disminuir = () => {
        setContador((actual) => actual - 1)
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>

            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )
}

export default Contador
