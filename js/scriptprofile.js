var user = document.getElementById('user');
var posts = document.getElementById('post');
var boton = document.getElementById('btn2');
var padre = document.getElementById('lista');
document.getElementById('form').addEventListener('submit', guardarComentario);

$(document).ready(function () {
    $('.sidenav').sidenav();
});

if (localStorage.getItem('dato1')) {
    let userTem = localStorage.getItem("dato1");
    user.innerHTML = "Usuario: " + "@" + userTem;
    posts.placeholder = "Que piensas: " + userTem;
} else {

}
function guardarComentario(e) {
    let post = document.getElementById('post').value; //obtiene el valor del textarea y guardao en una variable
    e.preventDefault(); //metodo que previene el refrescado de la pag automaticamente


    /* CREACION DE OBJETO POO */
    const comentario = {
        post
    };
    /* GUARDADO DE OBJETO EN LOCALSTORAGE */

    if (localStorage.getItem('comentarios') === null) { //Si no hay items guardados llena esta VACIO
        let comments = []; /* Array que guarda los comentarios */
        comments.push(comentario); //agrega en la ultima posicion
        localStorage.setItem('comentarios', JSON.stringify(comments));  /*guarda los comentarios en el arra con localstorage */
    } else { // si hay items los carga
        let comments = JSON.parse(localStorage.getItem('comentarios')); //obtengo los que tengo al momento
        comments.push(comentario); //agrego las nuevas
        localStorage.setItem('comentarios', JSON.stringify(comments)); //guarda con las nuevas en localstorage

    }
    obtenerComentarios();


}

function obtenerComentarios() {
    let comments = JSON.parse(localStorage.getItem('comentarios'));

    var padre = document.getElementById('lista');
    padre.innerHTML = '';

    for (let i = 0; i < comments.length; i++) { //recorre el arreglo
        let comment = comments[i].post; //obtener el comentaria

        padre.innerHTML += `<div class="card">
        <div class=""card.body>
        <p>${comment}</p>
        <a class="btn btn-danger" onclick="deleteComent('${comment}')">Eliminar</a>
        </div>
        </div>        
        `
    }

}

function deleteComent(texto) {
    let comments = JSON.parse(localStorage.getItem('comentarios')); /* TRAIGO datos del loca */
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].post == texto) {
            comments.splice(i, 1); /* indicen que va a eliminar */
        }

    }
    localStorage.setItem('comentarios', JSON.stringify(comments)) //guando con un elemento menos
    obtenerComentarios(); /* llamo la funcion que obtiene los comentarios para que se muestren */

}
obtenerComentarios();


/* function publicar() {
    var post = document.getElementById('post').value;
    let comentario = document.createElement("li");
    comentario.textContent = post;
    padre.appendChild(comentario);
}
boton.onclick = function () {
    publicar();
} */

