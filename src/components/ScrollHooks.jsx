import React, { useState, useEffect } from 'react'

export default function ScrollHooks(){

    const [scrollY, setScrollY] = useState(0)


    useEffect(()=>{
        console.log("Moviendo el Scroll")

        const detectarScroll = ()=>setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

        return ()=>window.removeEventListener("scroll", detectarScroll);
        
    },[scrollY]);

    useEffect(()=>{
        console.log("Fase de montaje")
    },[])

    useEffect(()=>{
        console.log("Fase de actualizacion")
    })

    useEffect(()=>{
        return ()=>{
            console.log("Fase de Desmontaje")
        }

    })

    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>ScrollY del Navegador {scrollY}px</p>
        </>
    );
}
