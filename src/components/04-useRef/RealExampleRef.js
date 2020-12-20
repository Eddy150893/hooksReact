import React, { useState } from 'react'
import "../02-useEffect/effects.css"
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
export const RealExampleRef = () => {
    //Si mostramos el multiple este tarda 4s en traer resultados de la API
    //y si lo desmontamos estariamos seteando un estado de un componente que ya no existe(desmontado)
    //el estado que estarariamos seteando es el del fetch que esta en multiple custom hooks
    //Aca no hay logica extraña se debe revisar el useFetch para ver el uso de ref
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Real Example Ref</h1>
            {show && <MultipleCustomHooks/>}
            <button 
            className="btn btn-primary mt-5"
            onClick={()=>{
                setShow(!show)
            }
            }>
                show/hide
            </button>
        </div>
    )
}
