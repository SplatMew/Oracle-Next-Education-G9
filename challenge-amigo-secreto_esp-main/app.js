let friendsArray = [];

function addFriends() {


    let input = document.getElementById('amigo');
    let currName = input.value.trim();
    if(!currName){
        alert("Proporciona un nombre válido.");
        return;
    }
   
    friendsArray.push(currName);

    input.value = "";

    renderList();    
}


function renderList(){

    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for(let i = 0; i < friendsArray.length; i++){
        const li = document.createElement("li");
        li.textContent = friendsArray[i];
        ul.appendChild(li);
    }

}

function friendRaffle() {

    if(friendsArray.length <= 1){
        alert("Agrega al menos dos amigos para comenzar el sorteo.");
        return;
    }

    const randomSelection = Math.floor(Math.random() * friendsArray.length);

    const winner = friendsArray[randomSelection];

    const result = document.getElementById("resultado");
    result.innerHTML="";

    const winnerLi = document.createElement("li");
    winnerLi.textContent = `El amigo secreto es ${winner}`;
    result.appendChild(winnerLi);

    
}