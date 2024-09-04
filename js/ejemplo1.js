// JavaScript source code
//Arrays
var frutas = ["Manzana", "Uva", "Pera", "Sandía", "Banana", "Melón"];
document.getElementById("listaFrutas").innerHTML = "<li>" + frutas[0] + "</li>";

for (var i = 0; i < frutas.length; i++) {
    document.getElementById("listaFrutas").innerHTML += "<li>" + frutas[i] + "</li>";
}
//Objects
var persona = { nombre: "Juan", telefono: "12345678" };

//Lista de objetos
var contactos = [
    { nombre: "Juan", telefono: "12345678" },
    { nombre: "Carmen", telefono: "21345678" },
    { nombre: "Pablo", telefono: "31245678" }
];
for (var i = 0; i < contactos.length; i++) {
    document.getElementById("listaContactos").innerHTML += "<li>" + contactos[i].nombre + ":" + contactos[i].telefono + "</li>";
    console.log(contactos[i])
}