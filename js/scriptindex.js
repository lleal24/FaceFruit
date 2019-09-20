/* $('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 }); */


var boton = document.getElementById('btn');

/* DATOS USUARIO REGUSTRADO */
var userRegister = "guayaba";
var passRegister = "123";

function validarLogin() {
    var usuario = document.getElementById('user').value; //FALENCIA saber donde ubicar las variables
    var contra = document.getElementById('passw').value;
    /* ALMECANIMIENTO EN LOCALSTORAE */
    localStorage.setItem("dato1", usuario);
    if (usuario == userRegister && contra == passRegister) {
        alert('Hola');
        return true;
    } else {
        alert('Datos invalidos');
        return false;
    }

   
}
/* boton.onclick = function () {
    validarLogin();
}
 */

