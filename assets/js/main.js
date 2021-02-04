let appContent = document.querySelector('#app');
const fabricElements = (elemento) => document.createElement(elemento);

/*CREACION DE LOS COMPONENTES*/
//CREANDO EL HEADER
function createHeader(titleHead) {
    let header = fabricElements('header'),
        img1 = fabricElements('img'),
        img2 = fabricElements('img'),
        title = fabricElements('h1');

    /*RECURSOS DE ELEMENTOS*/
    title.textContent = titleHead, img1.src = './assets/img/logo-bedu.svg', img2.src = './assets/img/lista.png';
    //AGREGANDO CLASES
    title.classList.add()
    header.appendChild(img1), header.appendChild(title), header.appendChild(img2);
    return header
}

//ROW FOR TO WRITE ALL TASK'S
let createRowTask = () => {
    let rowTask = fabricElements('div'),
        prueba2 = fabricElements('div'),
        subtitle = fabricElements('h2'),
        inputTask = fabricElements('input'),
        buttonAdd = fabricElements('button');

    buttonAdd.textContent = 'hola', subtitle.textContent = 'Task To Do';
    rowTask.classList.add('rowContent');
    prueba2.classList.add('inputTask')
    prueba2.appendChild(inputTask), prueba2.appendChild(buttonAdd);

    rowTask.appendChild(subtitle), rowTask.appendChild(prueba2);
    return rowTask
}


const createTaskContent = () => {
    let taskContent = fabricElements('div');


    taskContent.innerHTML = `
    <h1 class='taskContent'>QUE ONDA MIS TIOS, YA VAMOS A DARLE O QUESO, PERO ANTES QUE NADA, TENEMOS QUE ESTAR DE ACUERDO</h1>
    <h2>TRATE DE CREAR LO MAS QUE PUDE, NO SE PREOCUPEN POR LOS ESTILOS, ESO LO VAMOS TRABAJANDO EN EL TRANSCURSO</h2>
    <p> NO SE SI DE ESTA FORMA DE AGREGAR COMPONENTES SEA LA MEJOR, QUERIA PREGUNTALO CON USTEDES, PUES ES MAS RAPIDO</p>
    <p>PARA QUE ESTO FUNCIONE DEBEMOS EVITAR LO SIGUIENTE PARA QUE NADIE TRABAJE DE MAS Y TODOS COLABOREMOS</p>
    <ul>
        <li>all very 24/7 Comunication</li>
        <li>No podemos trabajar cada quien por su parte en diferentes proyectos, es mejor que sobre uno mismo todos vayamos metiendo cambios y creandoramas</li>
        <li>para que sea mas facil, hay que agarra esta y empezarle a meter la magia ¿como ven?, asi desde el principio se iran viendo los commits y los cambios en las ramas</li>
        <li>la otra plantilla que mando el bro TOÑO estaba bien pero tenia las cosas creadas manualmente como los divs y el header</li>
        <li> SI ESTAN DEACUERDO QUE AGARREMOS ESTA, SIN ALBUR Y LE METAMOS LA MAGIA DIGANME PORQUE CREO QUE SE LE TIENE QUE DAR ACCESO PARA QUE PUEDAN INYECTAR CAMBIOS HASTA DONDE YO SE, PARA QUE NO ESTEMOS TRABAJANDO DISPERSOS Y YA DESDE UNA NUEZ ESTEMOS ORGANIZADOS Y EMPEZAR A METERLE A UN MISMO PROYECTO </li>
        <li> BUENAS NOCHE, CAMBIO Y FUERA</h3>
    <ul>
    `


    return taskContent
}

appContent.append(createHeader('To Do App'))
appContent.append(createRowTask())
appContent.append(createTaskContent())