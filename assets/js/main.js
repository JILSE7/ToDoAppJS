let appContent = document.querySelector('#app');



const createHeader = () => {
    const header = document.createElement('header');
    header.innerHTML = `

    <img src="./assets/img/logo-bedu.svg" alt="">
    <h1>Mis Tareas</h1>
    `;
    header.classList.add('header')
    return header;
}

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


const createTaskContent = () => {
    const taskContent = document.createElement('section');
    taskContent.innerHTML = `
    <ul class="todo-list">
    </ul>
    `
    taskContent.classList.add('main')
    return taskContent
}


appContent.append(createHeader())
appContent.append(createRowTask());
appContent.appendChild(createTaskContent());



//CREACION DE TAREAS
class Task {
    static id = 0
    constructor(tarea) {
        this.tarea = tarea;
        this.id = Task.id += 1;
        this.completado = false
        this.creado = new Date()

    }
}


//TODOLIST
class TodoList {

    constructor() {
        this.tasks = []
    }

    nuevoTodo(todo) {
        this.tasks.push(todo);
    }

    eliminarTodo(id) {
        this.tasks = this.tasks.filter(todo => todo.id != id)

    }

    marcarCompletado(id) {
        for (let i of this.tasks) {
            if (i.id == id) {
                i.completado = !i.completado;
                break
            }
        }
    }

    eliminarCompletados() {}
}

let todoList = new TodoList();





//REFERENCIAS AL HTML
const list = document.querySelector('.todo-list')
console.log(list);

// CREACION DE TAREAS
let crearTASK = (task) => {
    let htmlTask = document.createElement('li')
    htmlTask.innerHTML =
        `
		<div class="view">
		    <input class="toggle" type="checkbox" ${task.completado ? 'checked' : ''}>
		    <label>${task.tarea}</label>
			<button class="destroy">X</button>
						</div>
					
    `
    htmlTask.setAttribute("data-id", task.id);
    task.completado ? htmlTask.classList.add('completado') : '';
    list.appendChild(htmlTask)

    return htmlTask;

}



//EVENTO BUTTON AGREGAR
const txtAgregar = document.querySelector('.add');
const inputTask = document.querySelector('#inputTask');
console.log(txtAgregar, inputTask);

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

inputTask.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && inputTask.value.length > 0) {
        console.log('dentro del task');
        const newTask = new Task(inputTask.value);
        todoList.nuevoTodo(newTask);
        console.log(todoList);
        crearTASK(newTask);

        inputTask.value = '';
    }
})




list.addEventListener('click', (event) => {

    let nombreElemento = event.target.localName,
        CompleteElement = event.target.parentElement.parentElement,
        idElement = CompleteElement.getAttribute('data-id')
    console.log(CompleteElement, idElement);

    if (nombreElemento.includes('input')) {

        todoList.marcarCompletado(idElement)
        CompleteElement.classList.toggle('completed');
        console.log(todoList);
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(idElement);
        list.removeChild(CompleteElement);
        console.log(todoList);
    }
});





























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