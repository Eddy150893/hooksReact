import React,{useState} from 'react'
import "../02-useEffect/effects.css"
import {useCounter} from "../../hooks/useCounter"
import { Small } from './Small';
export const Memorize = () => {
    const {state:counter,increment}=useCounter(10);
    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Counter :<Small value={counter}></Small></h1>
            <hr/>
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
