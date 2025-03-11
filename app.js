// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value;
    if (nombre === ""){
        alert("Por favor, ingresa un nombre valido.");
    }else{amigos.push(nombre);
        console.log(amigos);
        input.value = "";
        actualizarListaAmigos();
    } 
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    amigos.forEach(amigo => {
        const li = document.createElement('li'); 
        li.textContent = amigo; 
        listaAmigos.appendChild(li); 
    });
}

function sortearAmigo(){
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoElegido = amigos[amigoAleatorio];
        let elementoHTML = document.getElementById('resultado');
        elementoHTML.innerHTML= `El amigo secreto sorteado es: ${amigoElegido}`;

}
