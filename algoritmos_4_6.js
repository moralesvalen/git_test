console.log("Algoritmos del 4 al 6");
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

function awardBonuses(){
    let arr= [];
    for (let i = 1; i <=100 ; i++){
        if (i%3 ===0 && i%5 ===0){
             arr.push(`${i} - JACKPOT! 1 Million and a Yacht!`);
        }else if (i%3 !==0 && i%5 !==0){
            arr.push(`${i} - :(`);
        }else if (i%3 === 0){
            arr.push(`${i} - Vacation!`);

        }else if (i%5 ===0){
            arr.push(`${i} -  $100,000 bonus!`);
        }
    }
    return arr.join('\n');
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
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

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

function emojifyWord(word){
    let firtChar = word.charAt(0);
    let lastChart = word.charAt(word.length - 1);
    let newWord;
    if (firtChar === ":" && lastChart ===":"){
        newWord = word.slice(1,word.length - 1); 
        
        if  (newWord in emojis ) {
            return emojis[newWord];
        } else{
            return word;
        }
         
        }else {
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

function emojifyPhrase(phrase){
    let arr  = phrase.split(" ");
   arr = arr.map(word => emojifyWord(word) );
   return arr.join(" ");
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
