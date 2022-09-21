// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  ValArray = array.length;

  return array[ValArray - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  ValArray = array.length;

  return ValArray;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  ValArray = array.length;

  for (var i=0; i<ValArray; i++){
    array[i]++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
array.push (elemento);
return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift (elemento);
return array;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  ValPalabras = palabras.length;
  ValFrase = palabras[0];

  for (var i=1; i<ValPalabras; i++){
    var ValFrase = ValFrase + ` ${palabras[i]}`;
  }
  return ValFrase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  ValPalabras = array.length;
 
  for (var i=0; i<ValPalabras; i++){
    if (array[i] === elemento){
      return true
    } 
  }
  return false;

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  ValPalabras = numeros.length;
  ValNumeros = numeros[0];

  for (var i=1; i<ValPalabras; i++){
    var ValNumeros = ValNumeros + numeros[i];
  }
  return ValNumeros;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  ValPalabras = resultadosTest.length;
  ValTest = resultadosTest[0];

  for (var i=1; i<ValPalabras; i++){
    var ValTest = ValTest + resultadosTest[i];
  }
  ValTest= ValTest/i;
  return ValTest;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  ValPalabras = numeros.length;
  var valor = numeros[0];
  for (var i=1; i<ValPalabras; i++){
    if(numeros[i] >valor) { 
      valor = numeros[i];
    }
  }
  return valor;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  ValArg = arguments.length;
  var ValMult = 1;

  if (ValArg===0){
    return 0;
  } else if (ValArg===1){
    return arguments[0];
  } else{

    for (var i=0; i<ValArg; i++){
      ValMult = arguments[i] * ValMult;
    }
    return ValMult;
  }



}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  
  ValPalabras = arreglo.length;
  var x = 0;

  for (var i=0; i<ValPalabras; i++){
    if(arreglo[i] > 18) { 
      x++;
    }
  }
  return x;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  
  
  if(numeroDeDia === 1 || numeroDeDia === 7 ) { 
    return 'Es fin de semana';
  } else {
    return 'Es dia Laboral';  
  }
  }
  


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  StrN = n.toString()

  if(StrN[0] === '9')
  {
    return true;
  }

  return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  ValPalabras = arreglo.length;
 
  for (var i=0; i<ValPalabras; i++){
    if( arreglo[i] !== arreglo[i+1]){
      return false;
    }
    return true;
  }

}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  ValPalabras = array.length;
  var NewArray = [];

  for (var i=0; i<ValPalabras; i++){

    if( array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ){
      NewArray.push(array[i]);
    }
  }

  ValMeses = NewArray.length;

  if (ValMeses < 3){
    return "No se encontraron los meses pedidos";
  } else {
    return NewArray;
  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  ValPalabras = array.length;
  var NewArray = [];

  for (var i=0; i<ValPalabras; i++){

    if( array[i] > 100 ){
      NewArray.push(array[i]);
    }
  }
  return NewArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var NewArray = []
  var x = 0;
  for (var i=0; i<10; i++){

    numero = numero + 2;
    if (numero===i){
      break;
    }
    NewArray.push(numero);
  } 

  if (i<10){
    return "Se interrumpió la ejecución";
  }

  return NewArray;
}
  


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var NewArray = []
  var x = 0;
  for (var i=0; i<10; i++){

    if (i===5){
      continue; 
    } else {
      numero = numero + 2;
    } 
    NewArray.push(numero);
  } 
  return NewArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
