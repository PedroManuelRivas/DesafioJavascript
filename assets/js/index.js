//EJERCICIO 2 Función para definir operación aritmética
function aritmetica(n1, n2, op) {
    if (op == "+") {
        let total = (n1 + n2)
        alert("La operación aritmética es una adición, y la suma de los valores ingresados es " + total)
    }
    else if (op == "-") {
        let total = n1 - n2
        alert("La operación aritmética es una sustracción, y la resta de los valores ingresados es " + total)
    }
    else if (op == "*") {
        let total = n1 * n2
        alert("La operación aritmética es un producto, y la multiplicación de los valores ingresados es " + total)
    }
    else if (op == "/") {
        let total = n1 / n2
        alert("La operación aritmética es una división, y el resultado de los valores ingresados es " + total)
    }
    else if (op == "%") {
        let total = n1 % n2
        alert("La operación aritmética es un módulo, y el resto es " + total)
    }
    else {
        alert("Valor ingresado no es un operador aritmetico")
    }
}
//EJERCICIO 2 Funcion que solicita al usuario los datos 
function pedirNum() {
    let num1 = +prompt('Ingrese primer número (mayor a 0)')
    let num2 = +prompt('Ingrese segundo número (mayor a 0)')
    let oper = prompt('Ingrese operador aritmético a utilizar')
    aritmetica(num1, num2, oper)
}

//EJERCICIO 3 Funcion que convierte unidades
function convertir(c1, c2) {
    if (c2 == "k") {
        const kelvin = 273.15
        let conversion = (c1 + kelvin)
        alert("El valor ingresado " + c1 + " y se convierte en " + conversion + "grados Kelvin")
    }
    else if (c2 == "f") {
        const fahr = 32
        let p1 = 1.8
        let conversion = (c1 * p1)
        let tot = (fahr + conversion)
        alert("El valor ingresado " + c1 + " y se convierte en " + tot + "grados Fahrenheit")
    }
    else {
        alert("Valor ingresado no permitido")
    }
}
//EJERCICIO 3 Funcion que solicita al usuario los datos 
function pedirTemp() {
    let temp = +prompt('Ingrese valor a convertir (considerando que sean grados Celsius')
    let conv = prompt('¿A que unidad desea convertir? (K para Kelvin, F para Fahrenheit)')
    convertir(temp, conv)
}

/*EJERCICIO 4 Funcion que convierte dias
function calculo(m1) {
    if (m1 == 365) {
        let year = 1
        alert('La cifra ingresada corresponde a ' + year + " año")
    }
    else if (m1 > 365) {
        let ano = 365
        let week = 7
        let totAno = (m1 / ano)
        let sema = (ano + m1) - totAno
        let 
        alert('La cifra ingresada corresponde a ' + totAno + " año")
    }

    else{
        alert('valor no permitido')
    }
}
function calcDias() {
    let calc = +prompt('Ingrese valor para convertir en años, semanas, días')
    calculo(calc)
}*/

//EJERCICIO 5 Funcion que suma digitos ingresados por usuario

function sumatoria(a1, a2, a3, a4, a5){
    
}

function soliciarNumeros() {
    let num1 = +prompt('Ingrese primer número (mayor a 0)')
    let num2 = +prompt('Ingrese segundo número (mayor a 0)')
    let num3 = +prompt('Ingrese segundo número (mayor a 0)')
    let num4 = +prompt('Ingrese segundo número (mayor a 0)')
    let num5 = +prompt('Ingrese segundo número (mayor a 0)')
    alert('La sumatoria de todos los numeros es ' + sum + ' y el promedio es ' + prom)
//Fin de Funcion 5 que suma digitos ingresados por usuario

