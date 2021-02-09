//CREACION DE TAREAS
class Task {
    static id = 0 //CONTADOR PARA EL ID
    constructor(tarea) {
        this.tarea = tarea;
        this.id = Task.id += 1;
        this.completado = false
        this.creado = new Date()

    }
}

//TODOLIST, ARREGLO PARA NUESTRA LISTA DE TAREAS
class TodoList {

    constructor() {
        // this.tasks = []
        this.getLocalStorage()

    }

    nuevoTodo(todo) {
        this.tasks.push(todo);
        this.saveInLocalStorage()
    }

    eliminarTodo(id) {

        this.tasks = this.tasks.filter(todo => todo.id != id)
        this.saveInLocalStorage()
    }

    marcarCompletado(id) {
        for (let i of this.tasks) {
            if (i.id == id) {
                i.completado = !i.completado;
                this.saveInLocalStorage()
                break
            }

        }

    }

    eliminarCompletados() {
        this.tasks = this.tasks.filter(todo => !todo.completado)
        this.saveInLocalStorage()
    }

    saveInLocalStorage() {
        localStorage.setItem('Tareas', JSON.stringify(this.tasks));
    }

    getLocalStorage() {
        this.tasks = (localStorage.getItem('Tareas')) ? JSON.parse(localStorage.getItem('Tareas')) : [];

    }

}



//CREACION DEL HTML
let appContent = document.querySelector('#app');
//CREACION DEL HEADER
const createHeader = () => {
        const header = document.createElement('header');
        header.innerHTML = `
    <img src="./assets/img/logo-bedu.svg" alt="">
    <h1>Mis Tareas</h1>
    `;
        header.classList.add('header')
        return header;
    }
    //CREACION DEL LA FILA PARA CREAR LAS TAREAS
const createRowTask = () => {
    const tasks = document.createElement('div');
    tasks.innerHTML = `
    <section class="tasks">
            <input " type="text " name=" " id="inputTask" placeholder="QUE TENEMOS QUE HACER ">
            <button class="btn add">Agregar</button>
        </section>`;
    tasks.classList.add('generateTask')
    return tasks;
}

//CREACION DEL CONTENEDOR DE TAREAS
const createTaskContent = () => {
    const taskContent = document.createElement('section');
    taskContent.innerHTML = `
    <ul class="todo-list"></ul>
 
    <button class = 'borrar-todos btn btn-danger'> Borrar Completados </button>
    `;
    taskContent.classList.add('main');
    return taskContent;
}




//AGREGANDO LA ESTRUCTURA DEL SITIO
appContent.appendChild(createHeader());
appContent.appendChild(createRowTask());
appContent.appendChild(createTaskContent());

/********************************************************************** */
//VARIABLE PARA INSTANCIAR NUEVAS TAREAS
let todoList = new TodoList();
const txtAgregar = document.querySelector('.add'),
    inputTask = document.querySelector('#inputTask');



//REFERENCIAS AL HTML
const list = document.querySelector('.todo-list')

// CREACION DE TAREAS
let crearTASK = (task) => {
        let htmlTask = document.createElement('li') //CREACION HTML DEL LAS TAREAS
        htmlTask.innerHTML =
            `
		<div class="view">
		    <input class="toggle" type="checkbox" ${task.completado ? 'checked' : ''}>
		    <label>${task.tarea}</label>
			<button class="destroy">X</button>
						</div>
    `
        htmlTask.setAttribute("data-id", task.id); //OBTENIENDO EL ID DE LA TAREA
        task.completado ? htmlTask.classList.add('completado') : '';
        list.appendChild(htmlTask)
        return htmlTask;
    }
    //RECUPERANDO LOCALSTORAGE
todoList.tasks.forEach(element => {
    crearTASK(element);
});

//EVENTOS 
//BOTON AGREGAR
txtAgregar.addEventListener('click', () => {
        if (inputTask.value.length > 0) {
            console.log('dentro del task');
            const newTask = new Task(inputTask.value);
            todoList.nuevoTodo(newTask);
            console.log(todoList);
            crearTASK(newTask);
            inputTask.value = '';
        }
    })
    /********************************************************************** */

//AGREGAR MEDIANTE LA TECLA ENTER
inputTask.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && inputTask.value.length > 0) {
        console.log('dentro del task');
        const newTask = new Task(inputTask.value);
        todoList.nuevoTodo(newTask);
        crearTASK(newTask);
        inputTask.value = ''; //VACIAR EL IMPUT
    }
})

//MARCAR Y ELIMINAR
list.addEventListener('click', (event) => {
    let nameElement = event.target.localName, //OBTENIENDO EL TARGET DONDE APUNTA EL CLICK
        CompleteElement = event.target.parentElement.parentElement, //OBTENIENDO A TODO EL ELEMENTO LI
        idElement = CompleteElement.getAttribute('data-id') //OBTIENDO SU ID

    //MARCAR COMPLETADO
    if (nameElement.includes('input')) {
        todoList.marcarCompletado(idElement)
        CompleteElement.classList.toggle('completed'); //AGREGANDO Y QUITANDO LA CLASE COMPLETED
    } else if (nameElement.includes('button')) { //ELIMINANDO LOS ELEMENTOS
        todoList.eliminarTodo(idElement);
        list.removeChild(CompleteElement);
    }
});



//ELIMINAR TODOS TAREAS COMPLETADAS
const deleteAll = document.querySelector('.borrar-todos');
console.log(deleteAll);

deleteAll.addEventListener('click', () => {
    todoList.eliminarCompletados()
    for (let i = list.children.length - 1; i >= 0; i--) {
        let j = list.children[i];
        if (j.classList.contains('completed')) list.removeChild(j);

    };

    console.log('hola');

});
/************************************* */






























// /*CREACION DE LOS COMPONENTES*/
// //CREANDO EL HEADER
// function createHeader(titleHead) {
//     let header = fabricElements('header'),
//         img1 = fabricElements('img'),
//         img2 = fabricElements('img'),
//         title = fabricElements('h1');

//     /*RECURSOS DE ELEMENTOS*/
//     title.textContent = titleHead, img1.src = './assets/img/logo-bedu.svg', img2.src = './assets/img/lista.png';
//     //AGREGANDO CLASES
//     title.classList.add()
//     header.appendChild(img1), header.appendChild(title), header.appendChild(img2);
//     return header
// }

// //ROW FOR TO WRITE ALL TASK'S
// let createRowTask = () => {
//     let rowTask = fabricElements('div'),
//         prueba2 = fabricElements('div'),
//         subtitle = fabricElements('h2'),
//         inputTask = fabricElements('input'),
//         buttonAdd = fabricElements('button');

//     buttonAdd.textContent = 'hola', subtitle.textContent = 'Task To Do';
//     rowTask.classList.add('rowContent');
//     prueba2.classList.add('inputTask')
//     prueba2.appendChild(inputTask), prueba2.appendChild(buttonAdd);

//     rowTask.appendChild(subtitle), rowTask.appendChild(prueba2);
//     return rowTask
// }