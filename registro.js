var usuario = document.getElementById('usuario')
var clave = document.getElementById('clave')

function validarDatos() {
	usuario.addEventListener('input', validarUsuario)
	clave.addEventListener('input', validarClave)
	validarClave()
	validarUsuario()
}

function validarUsuario() {
	if(usuario.value==''){
	usuario.style.backgroundColor='#fa8a82'
           } else{
           	usuario.style.backgroundColor='#ffffff'
           }
}

function validarClave () {
	if(clave.value=='') {
	clave.style.backgroundColor='#fa8a82'
}    else{
           	clave.style.backgroundColor='#ffffff'
           }

}


window.addEventListener('load', validarDatos)