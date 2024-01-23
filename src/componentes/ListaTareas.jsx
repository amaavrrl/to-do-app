import React, { useState, useEffect } from "react";
import TareaIngresada from "./FormularioTarea";
import Tarea from './tarea';
import '../style/ListaTareas.css';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [tareasPendientes, setTareasPendientes] = useState(0);

  useEffect(() => {
    // Actualiza las tareas pendientes cada vez que cambia la lista de tareas
    const pendientes = tareas.filter((tarea) => !tarea.completada).length;
    setTareasPendientes(pendientes);
  }, [tareas]);

  const agregarTarea = (tarea) => {
    console.log(tarea);
    // Para evitar tareas en blanco:
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaIngresada onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
      <div className="contenedor-tareas-pendientes">
        {tareasPendientes > 0 && <p className="tareas-pendientes">Tareas pendientes: {tareasPendientes}</p>}

      </div>
    </>
  );
}

export default ListaTareas;
