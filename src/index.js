import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [nombre, setNombre] = useState("Luis");
    const [users, setUsers] = useState([

    ])

    const [persona, setPersona] = useState({
        nombre: '',
        apellido: ''
    })

    useEffect(() => {
        // componentDidMount
        // se ejecuta al renderizar el componente la primera vez
        setNombre("Pedro");

        return () => {
            // componentWillUnmount
            alert("Eliminando componente");
        }
    }, [])

    useEffect(() => {
        // componentDidUpdate
        //setNombre("luis");
    }, [nombre])

    const saludo = (evento, nombre = "John Doe") => {
        alert("Hola " + nombre);
    }

    return (
        <>
        <h1>Hola Mundo {nombre}</h1>

        <button onClick={() => setNombre("Juan")}>Cambiar Nombre</button>

        <button onClick={saludo}>Click 1</button>
        <button onClick={(evento) => {
            saludo(evento)
        }}>Click 2</button>

        <button onClick={(evento) => saludo(evento, nombre)}>Click 3</button>

        <button onClick={(evento) => {
            saludo(evento, nombre)
        }}>Click 4</button>

        </>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));