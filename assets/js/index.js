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

//EJERCICIO 4 Funcion que convierte cifra ingresada a años, meses, semanas, dias
function calculo(m1) {
    const mes = 30
    const anio = 365
    const sem = 7
    let years = Math.trunc(m1 / anio)
    let aniosEnDias = anio * years
    let months = Math.trunc((m1 - aniosEnDias) / mes)
    let mesesEnDias = mes * months
    let weeks = Math.trunc((m1 - aniosEnDias - mesesEnDias) / sem)
    let semanasEnDias = sem * weeks
    let dias = Math.trunc(m1 - aniosEnDias - mesesEnDias - semanasEnDias)
    alert("El valor ingresado es " + years + " año(s), " + months + " mes(es), " + weeks + " semana(as), "+ dias + " día(s)")
}
function ingreso() {
    let calc = +prompt("Ingrese una cifra para ser calculada en Años, meses, semanas y dias")
    calculo(calc)
}

//EJERCICIO 5 Funcion sumatoria y promedio
function sumProm(a1, a2, a3, a4, a5) {
    const prome = 5
    let sum = (a1 + a2 + a3 + a4 + a5)
    let prom = sum / prome
    alert("La sumatoria de los números ingresados es: " + sum + ", y el promedio de los mismos es: " + prom)
}

function promedio() {
    let m1 = +prompt("Ingrese primer valor: ")
    let m2 = +prompt("Ingrese segundo valor: ")
    let m3 = +prompt("Ingrese tercer valor: ")
    let m4 = +prompt("Ingrese cuarto valor: ")
    let m5 = +prompt("Ingrese quinto valor: ")
    sumProm(m1, m2, m3, m4, m5)
}