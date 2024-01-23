import React from "react";
import '../style/Tarea.css';
import { FaTrashCan } from "react-icons/fa6";

function Tarea ( {id, texto, completada, completarTarea, eliminarTarea} ){
    return (
      <div className={completada ? 'tarea-contenedor completada ' : 'tarea-contenedor' }>
        <div className="tarea-texto" onClick={() => completarTarea(id)}>
          
        {texto}
        </div>        
        <div className="tarea-contenedor-iconos" onClick={() => eliminarTarea(id)} >
        <FaTrashCan className="tarea-eliminar"/>

        </div>
      </div>
    )
}
export default Tarea;