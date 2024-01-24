import { useState } from 'react';
import React from "react";
import '../style/FormularioTarea.css'
import { v4 as uuid4} from 'uuid';
import Button from '@mui/material/Button';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';


function TareaIngresada(props){
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value)
        console.log(e.target.value)
    }

    const agregarTarea = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuid4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);

        
    }
    
    return(
        <form className="tarea-formulario" onSubmit={agregarTarea}>

            <input 
            className="tarea-input" type="text" 
            placeholder="Ingrese una tarea" name="texto"
            onChange={manejarCambio}
            />
            <Button 
                id="boton-agregar"
                variant="contained"
                size="small"
                endIcon={<AddTaskTwoToneIcon />}
                type="submit" 
            >
                Agregar
            </Button>
        </form>
    )
}

export default TareaIngresada;
