// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 7;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
   var YourName = 'Henry';
   return YourName; 

}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:

  ValorSuma = x + y; 
  return ValorSuma;
  
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  ValorResta = x - y; 
  return ValorResta;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  ValorMultip = x * y; 
  return ValorMultip;
  
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  ValorDiv = x / y; 
  return ValorDiv;
  
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x==y) {
    return true;
  }

  return false;
  
}


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
LetraStr1 = str1.length
LetraStr2 = str2.length

if (LetraStr1 == LetraStr2){
  return true;
}
return false;


}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:

  if (num < 90){
    return true;
  }
  return false;
  
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){
    return true;
  }
  return false;
  
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:

  var ValResto = x % y;

  return ValResto
  
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

  var ValPar = num % 2;

  if (ValPar == 0){
    return true;
  }
  return false;
  
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:

  var ValPar = num % 2;

  if (ValPar > 0){
    return true;
  }
  return false;
  
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:

  ValCuadrado = Math.pow(num,2);
  return ValCuadrado
  
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
  ValCuadrado = Math.pow(num,3);
  return ValCuadrado
  
  
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
  ValCuadrado = Math.pow(num, exponent);
  return ValCuadrado;
  
  
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:

  ValRound = Math.round (num);
  return ValRound;
  
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  ValRoundUp = Math.ceil (num);
  return ValRoundUp;
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()

  ValRandom = Math.random(0,1);
  return ValRandom;
  
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

  if (numero > 0){

    ValPositivo = 'Es positivo';
    return ValPositivo;

  } else if (numero < 0){

    ValNegativo = 'Es negativo';
    return ValNegativo;

  } else {

    return false;

  }
  
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  NewString = str + '!';
  return NewString;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  ComNombres = nombre +' '+ apellido;
  return ComNombres;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  Saludo = 'Hola ' + nombre + '!';
  return Saludo;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  ValAreaRec = alto * ancho;
  return ValAreaRec;
  
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

  ValPerCuadrado = lado * 4;
  return ValPerCuadrado;
  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

  ValBasAlt = base * altura / 2;
  return ValBasAlt;

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí:
  ValDolar = euro * 1.20;

  return ValDolar;
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  NumLetra = letra.length;
  DatInc = 'Dato incorrecto';
  DatGood = 'Es vocal';

  if (NumLetra > 1){

    return DatInc;  

  } else if (letra == 'a' | letra == 'e' | letra == 'i' | letra ==  'o' | letra == 'GIT ' ){

    return DatGood;

  } else {

    return DatInc; 

  }

  }




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
