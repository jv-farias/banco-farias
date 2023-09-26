var nomeCliente = prompt("Informe o seu nome:");
if (nomeCliente !== null && nomeCliente !== "") {
    var nome = document.querySelector("#nomeCliente");
    nome.innerHTML = `${nomeCliente}`;
}

var saldo = prompt("Informe o seu saldo:");
if (saldo !== null && saldo !== "") {
    var dinheiro = document.querySelector("#valorSaldo");
    dinheiro.innerHTML = `R$ ${saldo}`;
}

var economia = prompt("Informe quanto você quer economizar :");
if (economia !== null && economia !== "") {
    var dinheiroGuardado = document.querySelector("#valorEconomia");
    dinheiroGuardado.innerHTML = `R$ ${economia}`;
}

function atualizarSaldo() {
    document.querySelector("#valorSaldo").innerHTML = `R$ ${saldo}`;
}

function gastoIfood() {
    const valorIfood = 25;
    if (saldo >= valorIfood) {
        saldo = saldo - valorIfood; // saldo -= valorIfood;
        atualizarSaldo();
    } else {
        alert("Você está sem dinheiro!");
    }
}

function gastoSteam() {
    const valorSteam = 50;
    if (saldo >= valorSteam) {
        saldo = saldo - valorSteam; // saldo -= valorSteam;
        atualizarSaldo();
    } else {
        alert("Você está sem dinheiro!");
    }
}

function gastoZe() {
    const valorZe = 40;
    if (saldo >= valorZe) {
        saldo = saldo - valorZe; // saldo -= valorZe;
        atualizarSaldo();
    } else {
        alert("Você está sem dinheiro!");
    }
}

function gastoUber() {
    const valorUber = 20;
    if (saldo >= valorUber) {
        saldo = saldo - valorUber; // saldo -= valorUber;
        atualizarSaldo();
    } else {
        alert("Você está sem dinheiro!");
    }
}
atualizarSaldo();

document.getElementById("imgIfood").addEventListener("click", gastoIfood);
document.getElementById("imgSteam").addEventListener("click", gastoSteam);
document.getElementById("imgZe").addEventListener("click", gastoZe);
document.getElementById("imgUber").addEventListener("click", gastoUber);


function poucoDinheiro() {
    if (dinheiro < dinheiroGuardado) {
        document.querySelector("#body").style.backgroundColor = "red";
    } 
}

poucoDinheiro();

