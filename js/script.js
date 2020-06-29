/*   LOCALIZANDO LOS INPUTS Y BUTTONS DEL DOCUMENTO */
const name_task = document.getElementById('task');
const date = document.getElementById('date');
const button_low = document.getElementById('low');
const button_medium = document.getElementById('medium');
const button_high = document.getElementById('high');
const form = document.getElementById('formulario');
const alert = document.getElementById('alerta');
const list_tasks = document.getElementById('tasks');


/*  FUNCIONES */


// En caso de error
const mostrarError = mensaje => {
    const error = document.createElement('p');
    error.classList.add('alerta');
    error.textContent = mensaje;
    alerta.appendChild(error);
    ocultarError();
}

const ocultarError = () => {
    setTimeout(() => {
        document.querySelector('.alerta').remove();
    }, 2000);
}

// Agrega una nueva tarea
const agregarTarea = e => {
    e.preventDefault();

    if(name_task.value.trim() === ''){
        mostrarError('El nombre no debe estar vacío');
        return;
    }
    const actual = new Date().getTime();
    const fecha = new Date(date.value).getTime();

    if(fecha < actual || date.value === ''){
        mostrarError('Ingresa una fecha válida');
        return;
    }

     // Genera un id único
    const ID = Math.random().toString(36).substr(2, 9).toString();

    const nuevaTarea = {
        nombre: name_task.value,
        fecha: date.value,
        id: ID
    };
}

/*  EVENTS LISTENERS */
form.addEventListener('submit', e=> {
    e.preventDefault()
    console.log('Desde el formulario');
});


