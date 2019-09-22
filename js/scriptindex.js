/* $('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 }); */


var boton = document.getElementById('btn');

/* DATOS USUARIO REGUSTRADO */
var userRegister = "guayaba";
var passRegister = "123";


/* FUNCION QUE VALIDA EL INGRESO */
function validarLogin() {
    var usuario = document.getElementById('user').value; //FALENCIA saber donde ubicar las variables
    var contra = document.getElementById('passw').value;
    /* ALMECANIMIENTO EN LOCALSTORAE */
    localStorage.setItem("dato1", usuario);
    if (usuario == userRegister && contra == passRegister) {
        alert('Bienvenido');
        return true;
    } else {
        alert('Datos invalidos');
        return false;
    }  
}


