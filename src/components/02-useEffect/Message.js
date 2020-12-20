import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0});
    const {x,y}=coords;
    useEffect(() => {

        const mouseMove=(e)=>{
            const coords={x:e.x,y:e.y};
            setCoords(coords);
        }
        window.addEventListener('mousemove',mouseMove)
        console.log("componente montado");
        //El hook useEffect si colocamos return, siempre hara un proceso de limpieza en el componente(unmount)
        //Pero si necesitamos limpiar algo tambien lo debemos hacer aca
        return () => {

            window.removeEventListener('mousemove',mouseMove);
            console.log("componente desmontado");
        }
    }, [])
    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
