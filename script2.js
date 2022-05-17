function borrarTexto(){
	document.getElementById("ingreseTexto").value == "Escriba";
	document.getElementById("ingreseTexto").value = "";
	}

//Para borrar el texto de ejemplo al escribir en el textarea 
var input = document.querySelector("textarea"); 
input.focus(borrarTexto); 
	
	function cancelar() {
		var key = event.keyCode;
	
		if (key === 13) {
			event.preventDefault();
		}
	}


function encriptar(){
	var texto = document.getElementById("ingreseTexto").value.toLowerCase();
	//i es es para que afecte mayúsculas y minúsculas
	//g es para toda la línea u oración
	//m es para que afecte múltiples líneas o párrafos

	var textoCifrado = texto.replace(/e/igm,"enter");
	var textoCifrado = textoCifrado.replace(/o/igm,"ober");
	var textoCifrado = textoCifrado.replace(/i/igm,"imes");
	var textoCifrado = textoCifrado.replace(/a/igm,"ai");
	var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

	document.getElementById("muneco").style.display = "none"; 
	//desaparece la imagen y la cambia por el texto
	document.getElementById("ningunMensaje").style.display = "none";
	document.getElementById("descriptarEncriptar").innerHTML = textoCifrado;
	document.getElementById("copiar").style.display= "show";
	document.getElementById("copiar").style.display= "inherit";
}

function desencriptar(){
	var texto = document.getElementById("ingreseTexto").value.toLowerCase();

	var textoCifrado = texto.replace(/enter/igm,"e");
	var textoCifrado = textoCifrado.replace(/ober/igm,"o");
	var textoCifrado = textoCifrado.replace(/imes/igm,"i");
	var textoCifrado = textoCifrado.replace(/ai/igm,"a");
	var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

	document.getElementById("muneco").style.display = "none"; //desaparece la imagen y la cambia por el texto
	document.getElementById("ningunMensaje").style.display = "none";
	document.getElementById("descriptarEncriptar").innerHTML = textoCifrado;
	document.getElementById("copiar").style.display= "show";
	document.getElementById("copiar").style.display= "inherit";
}

var boton = document.getElementById("copiar");
boton.addEventListener("click",copiar,false);


function copiar() {
	var textoContenido = document.getElementById("descriptarEncriptar");
	var inputFalso = document.createElement("input"); 
	inputFalso.setAttribute("value", textoContenido.innerHTML); 

	document.body.appendChild(inputFalso);

	inputFalso.select(); 

	document.execCommand("copy");

	document.body.removeChild(inputFalso);
	alert("Texto copiado");
  }

  function changeStyle() {
	document.g
	document.getElementsByClassName("input-blue-border")[0].style.borderColor = "red";
  }

