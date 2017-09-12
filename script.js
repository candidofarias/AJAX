/**
* Método responçavel por carregar o conteúdo inicial da página
*
**/
function inicio(){
	// Exemplo de requisição GET
	var ajax = new XMLHttpRequest();
	// Seta tipo de requisição e URL com os parâmetros
	ajax.open("GET", "inicio.txt", true);
	// Envia a requisição
	ajax.send();
	// Cria um evento para receber o retorno.
	ajax.onreadystatechange = function() {
	  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
		if (ajax.readyState == 4 && ajax.status == 200) {
			//var data = ajax.responseText;
		 // Retorno do Ajax
			//console.log(data);
			document.getElementById("resultado").innerHTML=ajax.responseText;
		}
	}

}


function carregarTexto(){
	// Exemplo de requisição GET
	var ajax = new XMLHttpRequest();
	// Seta tipo de requisição e URL com os parâmetros
	ajax.open("GET", "texto.txt", true);
	// Envia a requisição
	ajax.send();
	// Cria um evento para receber o retorno.
	ajax.onreadystatechange = function() {
	  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
		if (ajax.readyState == 4 && ajax.status == 200) {
			var data = ajax.responseText;
		 // Retorno do Ajax
			console.log(data);
			document.getElementById("resultado").innerHTML=data;
		}
	}
}


function carregarImagem(){
	// Exemplo de requisição GET
	var ajax = new XMLHttpRequest();
	// Seta tipo de requisição e URL com os parâmetros
	ajax.open("GET", "imagem.html", true);
	// Envia a requisição
	ajax.send();
	// Cria um evento para receber o retorno.
	ajax.onreadystatechange = function() {
	  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
		if (ajax.readyState == 4 && ajax.status == 200) {
			var data = ajax.responseText;
		 // Retorno do Ajax
			console.log(data);
			document.getElementById("resultado").innerHTML=data;
		}
	}
}

function carregarVideo(){
	// Exemplo de requisição GET
	var ajax = new XMLHttpRequest();
	// Seta tipo de requisição e URL com os parâmetros
	ajax.open("GET", "video.html", true);
	// Envia a requisição
	ajax.send();
	// Cria um evento para receber o retorno.
	ajax.onreadystatechange = function() {
	  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
		if (ajax.readyState == 4 && ajax.status == 200) {
			var data = ajax.responseText;
		 // Retorno do Ajax
			console.log(data);
			document.getElementById("resultado").innerHTML=data;
		}
	}
}
