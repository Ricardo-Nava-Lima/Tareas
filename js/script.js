/*   LOCALIZANDO LOS INPUTS Y BUTTONS DEL DOCUMENTO */
const name_task = document.getElementById('task');
const date = document.getElementById('date');
const button_low = document.getElementById('low');
const button_medium = document.getElementById('medium');
const button_high = document.getElementById('high');
const form = document.getElementById('formulario');
const alert = document.getElementById('alerta');
const list_tasks = document.getElementById('tasks');


/*  EVENTS LISTENERS */
form.addEventListener('submit', e=> {
    e.preventDefault()
    console.log('Desde el formulario');
});

