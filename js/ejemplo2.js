// JavaScript source code
var contactos = [
    { nombre: "Darwin", telefono: 12345678 },
    { nombre: "Anderson", telefono: 12345678 },
    { nombre: "Jonathan", telefono: 12345678 },
    { nombre: "Stephani", telefono: 12345678 },
    { nombre: "Mélida", telefono: 12345678 },
    { nombre: "Victoria", telefono: 12345678 },
    { nombre: "Michelle", telefono: 12345678 },
];
console.log(contactos);
for (var i = 0; i < contactos.length; i++) {
    var html = "<tr>";
    html += "<td>" + contactos[i].nombre + "</td>";
    html += "<td>" + contactos[i].telefono + "</td>";
    html += "</tr>";

    document.getElementById("tbodyContactos").innerHTML += html;
}