// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

	const amigo = document.getElementById("amigo").value;
	if (amigo != "") {
		amigos.push(amigo);
		mostrarAmigos();
	} else {
		alert("Ingrese un nombre valido.");
	}
	document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
	const amigosHTML = document.querySelector("#listaAmigos");
	amigosHTML.innerHTML = "";
	for (let i = 0; i < amigos.length; i++) {
		const amigo = amigos[i];
		//creo el li
		const li = document.createElement("li");
		li.textContent = amigo;
		amigosHTML.appendChild(li);
	}
}

function sortearAmigo() {
	if (amigos.length == 0) {
		alert("No hay amigos para sortear.");
		return;
	}
	const resultadoHTML = document.querySelector("#resultado");
	const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
	resultadoHTML.innerHTML = `${amigoSorteado}`;
	document.querySelector(".button-draw").disabled = true;
	document.querySelector(".button-add").disabled = true;
}