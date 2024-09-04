// JavaScript source code

var producto = [
    { No: 1, nombre: "Whopper", precio: 5.99, cantidad: 50 },
    { No: 2, nombre: "Cheeseburger", precio: 2.99, cantidad: 100 },
    { No: 3, nombre: "Big King", precio: 3.49, cantidad: 75 },
    { No: 4, nombre: "Bacon King", precio: 6.99, cantidad: 40 },
    { No: 5, nombre: "Whopper Texas", precio: 4.99, cantidad: 60 },
    { No: 6, nombre: "Whopper Doble", precio: 7.49, cantidad: 30 },
    { No: 7, nombre: "French Fries (Large)", precio: 2.49, cantidad: 120 },
    { No: 8, nombre: "Onion Rings", precio: 2.29, cantidad: 80 },
    { No: 9, nombre: "Chicken Nuggets (10 piezas)", precio: 1.49, cantidad: 200 },
    { No: 10, nombre: "BK Stackers", precio: 3.99, cantidad: 90 }
];
var productoBody = document.getElementById("tbodyProducto");
producto.forEach((producto) => {
    // Crear una nueva fila
    let nuevaFila = productoBody.insertRow();

    // Crear y agregar las celdas para el índice y el valor
    let celdaNo = nuevaFila.insertCell(0);
    let celdaNombre = nuevaFila.insertCell(1);
    let celdaPrecio = nuevaFila.insertCell(2);
    let celdaCantidad = nuevaFila.insertCell(3);

    celdaNo.textContent = producto.No;
    celdaNombre.textContent = producto.nombre;
    celdaPrecio.textContent = `$${producto.precio.toFixed(2)}`;
    celdaCantidad.textContent = producto.cantidad;
});