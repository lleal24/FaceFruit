var user = document.getElementById('user');
var posts = document.getElementById('post');
var boton = document.getElementById('btn2');
var padre = document.getElementById('lista');

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

if (localStorage.getItem('dato1')) {
    let userTem=localStorage.getItem("dato1");
    user.innerHTML=  "Usuario: " + userTem;
    posts.placeholder = "Que piensas: " + userTem;
} else {
    
}

function publicar() {
    var post = document.getElementById('post').value;
    let comentario = document.createElement("li");
    comentario.textContent = post;
    padre.appendChild(comentario);
}
boton.onclick = function () {
    publicar();
}

