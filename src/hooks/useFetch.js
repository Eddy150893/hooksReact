import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    const [state, setstate] = useState({data:null,loading:true,error:null});
    //Creamos un valor de referencia para saber si el componentes esta montado
    //cuando es montado el componente manda a llamar este useFetch
    //si es desmontado con el useEffect de abajo en su funcion return
    //cambiamos la referencia a false y por tanto ya no seteariamos el state
    //pues no tiene sentido setear informacion de un componente que ya no esta en la ui
    const isMounted = useRef(true);
    //si al efectono le colocamos argumentos se lanza al montar el componente
    useEffect(()=>{
        //si el efecto tiene un return cada vez que el componente es desmontado lanza lo que este en el return
        return()=>{
            isMounted.current=false;
        }
    },[])
    useEffect(() => {
        setstate({data:null,loading:true,error:null})
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            setTimeout(()=>{
                //Aca hacemos la validacion de si esta montado
                //que haga el seteo si no de lo contrario
                //que no haga nada
                if(isMounted.current){
                    setstate({
                        loading:false,
                        error:null,
                        data
                    })
                }
            },4000);
        });
    }, [url]);
    return state;
}
