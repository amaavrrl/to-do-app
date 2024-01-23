import React, { useState } from "react";
import './App.css';
import ListaTareas from './componentes/ListaTareas';

function App() {
  const [tareasPendientes, setTareasPendientes] = useState(0);

  const actualizarTareasPendientes = (nuevaCantidad) => {
    setTareasPendientes(nuevaCantidad);
  };

  return (
    <div className='contenedor-to-do'>
      <div className="tareas">
        <h1>To Do App</h1>
        <ListaTareas
          actualizarTareasPendientes={actualizarTareasPendientes}
          tareasPendientes={tareasPendientes}
        />
      </div>
    </div>
  );
}

export default App;
