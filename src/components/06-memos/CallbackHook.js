import React, { useState,useCallback, useEffect } from 'react'
import "../02-useEffect/effects.css"
import { ShowIncrement } from './ShowIncrement';
export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    // const increment=()=>{
    //     setCounter(counter + 1);
    // }
    //UseCallback regresa una funcion memorizada
    //Al memorizar la funcion es como si la funcion nunca
    //cambiara pues es el mismo objeto entonces en el
    //componente hijo utilizamos React.memo y no se renderizara
    //mas que solo una vez pues siempre detectara la misma instancia de la funcion
    //Caso de uso 1
    const increment=useCallback((num) => {
        setCounter(c=>c+num);
    },[setCounter])
    //Caso de uso 2 cuando un useEffect tiene
    //como dependencia una funcion
    // useEffect(() => {
    //     //???
    // }, [increment])
    return (
        <div>
            <h1>useCallback Hook {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
