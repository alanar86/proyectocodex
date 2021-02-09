var imagenCtr = []

imagenCtr [0] = ['imagenes/misterio.jpg']
imagenCtr [1] = ['imagenes/annabelle.jpg']
imagenCtr [2] = ['imagenes/calle.jpg']

var imagenes = document.getElementById('ctr')

imagenes.src = imagenCtr [0][0]

var indice = 0

function actualizarImagen () {
	indice++
	if(indice >2){
		indice = 0
	}
	imagenes.src = imagenCtr [indice][0]
}

setInterval (actualizarImagen, 4000)