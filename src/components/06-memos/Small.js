import React from 'react'
//Basicamente memo solo renderizara de nuevo
//el componenete si y solo si las properties(valores) cambias
//de lo contrario no lo hace
//para ver como se comporta con funciones pasadas ver el callbackHook y Showincrement
export const Small = React.memo(({value}) => {
    console.log("Me volvi a llamar")
    return (
       <small>{value}</small>
    )
})
