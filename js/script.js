/*   LOCALIZANDO LOS INPUTS Y BUTTONS DEL DOCUMENTO */
const name_task = document.getElementById('task');
const date = document.getElementById('date');
const button_low = document.getElementById('low');
const button_medium = document.getElementById('medium');
const button_high = document.getElementById('high');
const form = document.getElementById('formulario');
const alert = document.getElementById('alerta');
const list_tasks = document.getElementById('tasks');

let tareas = [];


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

    let importancia;
    let clase;
    if( !baja || !media || !alta){ 
        importancia = 'low';
        clase = 'low';
    }
    if (media){ 
        importancia = 'medium';
        clase = 'medium';
    }
    else if (alta){
        importancia = 'high';
        clase = 'high';
    }

     // Genera un id único
    const ID = Math.random().toString(36).substr(2, 9).toString();

    const nuevaTarea = {
        nombre: name_task.value,
        fecha: date.value,
        id: ID,
        importancia
    };

    crearTarea(nuevaTarea, clase);

    form.reset();
}


// Crea una nueva tarea
const crearTarea = (tarea, clase) => {
    const fragment = document.createDocumentFragment();
    const tareaNueva = document.createElement('li');
                tareaNueva.classList.add('task');
                tareaNueva.setAttribute('data-tarea-id', tarea.id);
                tareaNueva.innerHTML = `
                    <p class="task-title">${tarea.nombre}</p>
                    <p class="task-format">fecha establecida</p>
                    <p class="task-date">${tarea.fecha}<p>                                        
                `;               
                const boton = document.createElement('button')
                boton.classList.add('tarea-borrar', clase);
                boton.textContent = 'Borrar';
                boton.onclick = borrarTarea;
                tareaNueva.appendChild(boton);
                fragment.appendChild(tareaNueva);

    tasks.appendChild(fragment);
}

// Agrega la tarea al localStorage
const agregarLocalStorage = tarea => {
    tareas = obtenerLocalStorage();
    // Añade la nueva tarea
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Elimina la tarea de la lista
const borrarTarea = e => {
    
    e.target.parentElement.remove();

    const id = (e.target.parentElement.getAttribute('data-tarea-id'));
    borrarTareaLocalStorage(id);
    
}

const borrarTareaLocalStorage = id => {
    tareas = obtenerLocalStorage();
    tareasNuevas = tareas.filter(tar => tar.id !== id)
    
    localStorage.setItem('tareas', JSON.stringify(tareasNuevas));
}

/*  EVENTS LISTENERS */
let baja = true;
let media = false;
let alta = false;

button_low.addEventListener('click', e => {
    e.preventDefault();
    baja = true;
    media=false;
    alta=false;
})

button_medium.addEventListener('click', e => {
    e.preventDefault();
    baja=false;
    media = true;
    alta=false;
})

button_high.addEventListener('click', e => {
    e.preventDefault();
    baja= false;
    media=false;
    alta = true;
    
})

form.addEventListener('submit', agregarTarea );


