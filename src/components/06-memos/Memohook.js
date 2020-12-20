import React,{useMemo, useState} from 'react';
import "../02-useEffect/effects.css";
import {useCounter} from "../../hooks/useCounter";
import {procesoPesado} from "../../helpers/procesoPesado";
export const MemoHook = () => {
    const {state:counter,increment}=useCounter(5000);
    const [show, setShow] = useState(true);
    const memoProcesoPesados=useMemo(() => procesoPesado(counter),[counter])
    return (
        <div>
            <h3>MemoHook :<small>{counter}</small></h3>
            <hr/>
            {/* Ponemos la constante memorizada con use memo y asi no se ejecuta 
            tantas veces el proceso pesado a menos que cambie el counter */}
            <p>{memoProcesoPesados}</p>
            {/* Como useCounter espera un valor por eso 
            hacemos la llamada con un callback */}
            <button
             className="btn btn-primary"
             onClick={() => increment()}>
                +1
            </button>
            <button
            className="btn btn-outline-primary ml-3"
            onClick={()=>{
                setShow(!show)
            }}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}