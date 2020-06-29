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

const agregarTarea = e => {
    e.preventDefault();

    if(name_task.value.trim() === ''){
        console.log('El nombre no debe estar vacío');
        return;
    }
    const actual = new Date().getTime();
    const fecha = new Date(date.value).getTime();

    if(fecha < actual || date.value === ''){
        console.log('Ingresa una fecha válida');
        return;
    }
}

/*  EVENTS LISTENERS */
form.addEventListener('submit', e=> {
    e.preventDefault()
    console.log('Desde el formulario');
});


