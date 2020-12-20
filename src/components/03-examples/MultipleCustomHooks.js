import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter';
export const MultipleCustomHooks = () => {
    const {state,increment}=useCounter(1);
    const {loading,data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    //data puede ser undefined o null
    //!null da como resultado true
    //!!null da como resultado false
    //por consiguiente si no tiene null no dara false por ende dara true entonces tiene data
    //const {author,quote}=!!data&&data[0];
    const { quote, author } = !loading && data[0];
    // console.log(author,quote);
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {loading?( <div className="alert alert-info text-center">
                Loading...
            </div>):(
                <blockquote className="blockquote text-right">
                <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            )}
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
