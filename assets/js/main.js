var resultados = document.getElementById("resultado");
var boton  = document.getElementById("demo");
boton.addEventListener("click", function(){
	alert("Hola Mundo")
})

function cargado(){
	alert("La pagina está cargada")
}

function fuera(){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode("El estás fuera del botón");
	parrafo.appendChild(texto);
	resultado.appendChild(parrafo);
}
function encima(){
	var span = document.createElement("span");
	var texto = document.createTextNode("Ahora estás sobre el botón");
	span.appendChild(texto);
	resultado.appendChild(span);
}
