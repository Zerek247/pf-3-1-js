

// ========= Arturo Ramirez ==============

export function addTwoNumbers(a, b) {
  return a + b;
}

export function restar(a, b) { 
  return a - b; 
}

export function multiplicar(a, b) { 
  return a * b; 
}

export function dividir(a, b) { 
  return a / b; 
}

// Menú
const opcion = (prompt(
  "Calculadora\n" +
  "1) Sumar\n" +
  "2) Restar\n" +
  "3) Multiplicar\n" +
  "4) Dividir"
) || "")

let resultado;

switch (opcion) {
  case "1": {
    const a = Number(prompt("Primer número para SUMAR:"));
    const b = Number(prompt("Segundo número para SUMAR:"));
    resultado = addTwoNumbers(a, b);
    break;
  }
  case "2": {
    const a = Number(prompt("Primer número para RESTAR:"));
    const b = Number(prompt("Segundo número para RESTAR:"));
    resultado = restar(a, b);
    break;
  }
  case "3": {
    const a = Number(prompt("Primer número para MULTIPLICAR:"));
    const b = Number(prompt("Segundo número para MULTIPLICAR:"));
    resultado = multiplicar(a, b);
    break;
  }
  case "4": {
    const a = Number(prompt("Primer número para DIVIDIR:"));
    const b = Number(prompt("Segundo número para DIVIDIR:"));
    resultado = dividir(a, b);
    break;
  }
  default:
    console.log("Opción no válida.");
    alert("Opción no válida.");
}


if (resultado !== undefined) {
  console.log("Resultado:", resultado);
  alert("Resultado: " + resultado);
}
