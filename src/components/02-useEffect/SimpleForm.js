import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';
export const SimpleForm = () => {
    const [formState, setformState] = useState({
        name:'',
        email:''
    });
    const {name,email}=formState;
    useEffect(()=>{
        // console.log('Hey');
    },[]);
    useEffect(()=>{
        // console.log('formState Cambio');
    },[formState]);
    useEffect(()=>{
        // console.log('email Cambio');
    },[email]);
    //Cuando no se envia un parametro
    //React sobreentiende que se le envia el evento
    //el siguiente desestructuramos el evento e.target
    const handleInputChange=({target})=>{
        setformState({
            ...formState,
            [target.name]:target.value
        })
    }
    return (
        <>
          <h1>useEffect</h1> 
          <hr/> 
          <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
              />
          </div>
          <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
              />
          </div>
          {(name==="123")&&<Message/>}
        </>
    )
}
