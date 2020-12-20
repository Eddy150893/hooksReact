import React, { useState,useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter';
import "./layout.css";
export const Layout = () => {
    const {state,increment}=useCounter(1);
    const {loading,data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const [boxSize, setBoxSize] = useState({})
    const pTag = useRef();
    const {quote} = !loading && data[0];

    useLayoutEffect(() => {
        //Este efecto funciona igual que useEffect
        //pero se utiliza mas como un efecto 
        //que se dispara cuando el componente ya esta montado
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
            
            <blockquote className="blockquote text-right">
            <p 
            className="mb-0"
            ref={pTag}>
                {quote}
            </p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <button 
            className="btn btn-primary"
            // Si una funcion tiene argumentos es mejor llamarlo por medio de callbacks
            // como la funcion acontinuacion, como bien sabemos si no lo hacemos toma el evento como argumento
            //sin embargo si la funcion no tiene argumentos mandar a llamar sin callback
            onClick={() => increment()}>
                Siguiente Quote
            </button>
        </div>
    )
}
