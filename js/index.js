// JavaScript source code
function sumar() {
    var num1 = document.getElementById("txtNum1");
    var num2 = document.getElementById("txtNum2");

    var total = parseFloat(num1.value) + parseFloat(num2.value);

    document.getElementById("txtResultado").value = total;
}