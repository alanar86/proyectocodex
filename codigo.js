var nombre = prompt ("Ingrese su nombre")

var bienvenida = document.getElementById ('titulo')
bienvenida.innerHTML = '<h2> Hola '+nombre+', en esta sección encontrarás las preguntas frecuentas.<h2>'

var imagen = document.getElementById ('img_4')

var fondo = prompt ("Escoge una imagen: Libro - Castillo")

fondo=fondo.toLowerCase ()

if (fondo=='libro') {
	imagen.style.backgroundImage = 'url(imagenes/faqs.jpg)'
}
if (fondo=='castillo') {
	imagen.style.backgroundImage = 'url(imagenes/castillo.jpg)'
}