console.log("Algoritmos de dasafio parate I");
/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

/* Función de Pánico
Escribe una función PANIC!. La función debe tomar una oración y devolver la misma
oración en mayúsculas con un signo de exclamación (!) al final. Usa los métodos
de cadena integrados de JavaScript.

Si la cadena es una frase u oración, agrega un emoji 😱 entre cada palabra.

Ejemplo de entrada: "Hello"
Ejemplo de salida: "HELLO!"

Ejemplo de entrada: "I'm almost out of coffee"
Ejemplo de salida: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

const panic = (word) => {
  arr = word.split(" ");
  arr = arr.map((element) => element.toUpperCase());
  return arr.join(" 😱 ") + "!";
};
console.log(panic("hola My name is Mauricio Morales"));
// join hace una cadane a partir d eun array

/* Whispering function 
  Write a function `whisper` that takes in a sentence 
  and returns a new sentence in all lowercase letters with
  "shh..." at the beginning. 
  
  The function should also remove an exclamation point
  at the end of the sentence, if there is one. 
  
  Example 
  input: "The KITTENS are SLEEPING!"
  output: "shh... the kittens are sleeping"
  
  Hint: endsWith and slice
  */
/*
  Escribe una función whisper que reciba una oración y devuelva una nueva oración en todas las letras minúsculas
   con "shh..." al principio.
  
  La función también debe eliminar un signo de exclamación al final de la oración, si existe.
  
  Ejemplo:
  
  Entrada: "The KITTENS are SLEEPING!"
  
  Salida: "shh... the kittens are sleeping"
  
  Pista: usa los métodos endsWith y slice.
  */

const whisper = (word) => {
  arr = word.split("");
  let long = arr.length;
  arr = arr.map((elemento) => {
    if (arr.indexOf(elemento) !== long - 1) {
      elemento = elemento.toLowerCase();
      return elemento;
    } else {
      return (elemento = elemento === "!" ? "" : elemento);
    }
  });

  return "shh... " + arr.join("");
};

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this! is a Wendy's!"));

/* Alternating Caps 
   Write a function that takes in a string of letters
   and returns a sentence in which every other letter is capitalized.
  
  Example input: "I'm so happy it's Monday"
  Example output: "I'M So hApPy iT'S MoNdAy"
  */

/* Mayúsculas Alternadas
   Escribe una función que tome una cadena de letras
   y devuelva una oración en la que cada otra letra esté en mayúscula.
  
  Ejemplo de entrada: "I'm so happy it's Monday"
  Ejemplo de salida: "I'M So hApPy iT'S MoNdAy"
  */

function altCaps(str) {
  let arr = str.split("");

  newStr = arr.map((letra, i) => {
    if ((i + 1) % 2 === 0) {
      return (letra = letra.toUpperCase());
    } else {
      return letra;
    }
  });
  return newStr.join("");
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

/* toTitleCase
  Write a function that will capitalize every word in a sentence.  
  
  Example Input: "everything, everywhere, all at once"
  Example Output: "Everything, Everywhere, All At Once"
  */

/* 
  First, write a function that takes in one word and 
  capitalizes the first letter of that word.
  
  Example Input: "scrimba"
  Example Output: "Scrimba"
  
  Hint: Trying using slice() and .toUpperCase()
  */

/* toTitleCase
  Escribe una función que capitalice cada palabra en una oración.
  
  Ejemplo de Entrada: "everything, everywhere, all at once"
  Ejemplo de Salida: "Everything, Everywhere, All At Once"
  */

/* 
  Primero, escribe una función que tome una palabra 
  y capitalice la primera letra de esa palabra.
  
  Ejemplo de Entrada: "scrimba"
  Ejemplo de Salida: "Scrimba"
  
  Sugerencia: Intenta usar slice() y .toUpperCase()
  */

function capitalizeWord(word) {
  let arr = word.split("");
  newWrold = arr.map((letter, i) => {
    if (i === 0) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  });

  return newWrold.join("");
}

/* 
  Now write a function that capitalizes every word in a sentence. 
  How can you reuse the function you just wrote? 
  */
/* 
  Ahora escribe una función que capitalice cada palabra en una oración. 
  ¿Cómo puedes reutilizar la función que acabas de escribir? 
  */

function toTitleCase(str) {
  arr = str.split(" ");
  newArr = arr.map((element) => capitalizeWord(element));
  return newArr.join(" ");
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

///otro metodo
function capitalizeWord1(word) {
  return word[0].toUpperCase() + word.slice(1);
}

/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!
 */

/* Totalmente No Otro FizzBuzz

¡El CEO de Scrimba, Per Borgen, quiere que escribas un programa para otorgar
 bonificaciones especiales a todos sus empleados según sus números de identificación
  de empleado!

Scrimba tiene 100 empleados y sus números de identificación de empleado varían
 del 1 al 100. Si el número de identificación del empleado es:

Divisible por 3 - ¡Vacaciones!
Divisible por 5 - ¡Bono de $100,000!
Divisible tanto por 3 como por 5 - ¡PREMIO MAYOR! ¡1 Millón y un Yate!
No divisible por 3 ni por 5 - :(

Escribe un programa para recorrer todos los números de identificación e imprimir
 su premio.
La salida de tu función debería verse así:

1 - :(
2 - :(
3 - ¡Vacaciones!
4 - :(
5 - ¡Bono de $100,000!
*/

function awardBonuses() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push(`${i} - JACKPOT! 1 Million and a Yacht!`);
    } else if (i % 3 !== 0 && i % 5 !== 0) {
      arr.push(`${i} - :(`);
    } else if (i % 3 === 0) {
      arr.push(`${i} - Vacation!`);
    } else if (i % 5 === 0) {
      arr.push(`${i} -  $100,000 bonus!`);
    }
  }
  return arr.join("\n");
}

console.log(awardBonuses());

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

Los servicios populares como Slack y GitHub permiten el uso de códigos cortos
 de emojis, lo que significa que detectarán cuando una palabra en una oración 
 comienza y termina con dos puntos (:) y reemplazarán automáticamente esa palabra 
 con un emoji.

Estos códigos cortos permiten a los usuarios agregar un emoji a sus mensajes
 escribiendo un código en lugar de buscar un emoji en una lista.

Por ejemplo, escribir :smile: reemplazará ese texto con 😊.

*/

const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Escribe una función que verifique si una palabra en minúsculas comienza y
termina con dos puntos. Si es así, elimina los dos puntos y busca la palabra
en el objeto de emojis. Si la palabra está en el objeto de emojis, devuelve
el emoji correspondiente. Si no está, devuelve la palabra original.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojifyWord(word) {
  let firtChar = word.charAt(0);
  let lastChart = word.charAt(word.length - 1);
  let newWord;
  if (firtChar === ":" && lastChart === ":") {
    newWord = word.slice(1, word.length - 1);

    if (newWord in emojis) {
      return emojis[newWord];
    } else {
      return newWord;
    }
  } else {
    return word;
  }
  return word;
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Escribe una función para encontrar cualquier código corto de emoji en una frase.
Tu función debe mapear cada palabra en la frase, convertir en emoji cualquier
palabra que comience y termine con dos puntos, y luego devolver la frase con
los emojis. Siéntete libre de usar tu función de emojificación del ejercicio 
anterior.
Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/

function emojifyPhrase(phrase) {
  let arr = phrase.split(" ");
  arr = arr.map((word) => emojifyWord(word));
  return arr.join(" ");
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));

/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

Los anagramas son grupos de palabras que se pueden formar con las mismas letras. 
Por ejemplo, las letras en "pea" se pueden reorganizar para formar "ape", y las 
letras en "allergy" se pueden reorganizar para formar "gallery".

Escribe una función para verificar si dos cadenas de letras minúsculas son anagramas. 
Devuelve true si la palabra es un anagrama. Devuelve false si no lo es.

Ejemplo de entrada: "allergy", "gallery" Ejemplo de salida: true

Ejemplo de entrada: "rainbow", "crossbow" Ejemplo de salida: false

*/ 

function isAnagram(str1, str2){
  arr1 = str1.split("");
  arr2 = str2.split("");
  if (arr1.length === arr2.length){
    let out = arr1.some(letter => arr2.includes(letter));
    return out;

  }else{
    return false
  }

}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("sapo", "pasa"));


/* We Come in Peace!   
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

function reverseString(str){
    return str;
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

function reverseStringsInArray(arr){
    return arr;
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));


/*  
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

// Solution 1: for loop 
function isPalindrome(str){

}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
