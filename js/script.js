console.log('JS OK');

const nome = String(prompt('Qual è il tuo nome?'));

console.log(nome)

const cognome = String(prompt('Qual è il tuo cognome?'));

console.log(cognome)

const colore = String(prompt('Qual è il tuo colore preferito?'));

console.log(colore);

const numero = 21;

const password = nome + cognome + colore + numero;

console.log('La tua password è ' + password);

document.getElementById('casual-password').innerHTML = 'La tua password è: <strong>' + password + '</strong>';


