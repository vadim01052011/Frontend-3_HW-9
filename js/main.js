// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. 
// Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.


function logItems(array) {
  for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
  }
}

console.log(logItems(['Mango', 'Poly', 'Ajax']));
 


// Напиши скрипт підрахунку вартості гравіювання прикрас. 
// Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.


const calculateEngravingPrice = function(message, pricePerWord) {
  const result = message.split(" ")
  return `Вартість гравіювання: ${result.length * pricePerWord}$`
}
const price = 777;
const text1 = "I love JS";
console.log(calculateEngravingPrice(text1, price));




// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.


const findLongestWord = function(string) {
    // console.log(string);
    const word = string.split(" ");
    // console.log(word);
    
    let longestWord = word[0];
    for (const str of word) {
// console.log(str);
if (str.length > longestWord.length) {
    longestWord = str
}
    }
    return longestWord
    
}

console.log(findLongestWord("Stephen Curry LeBron James Michael Jordan Kobe Bryant"));




// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.


const formatString = function(string) {
if (string.length <= 40) {
  return string
} else {
return string.slice(0, 40) + '...';
}

}

console.log(formatString("Euclid, Archimedes, Pythagoras, Carl Friedrich Gauss, René Descartes, Blaise Pascal, Leonhard Euler, David Hilbert"));




// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.


const checkForSpam = function(message) {
    // console.log();
    const smallLetters = message.toLowerCase();
    return smallLetters.includes("spam") || smallLetters.includes("sale");
    
}

console.log(checkForSpam("Lorem ipsum SALE dolor sit SPAM amet consectetur adipisicing elit"));




// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.


// let input;
// const numbers = [];
// let total = 0;


let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число: ")
    // console.log(typeof(input));
    
    
    if (input === null) {
       alert("Ви вийшли")
        break;
    }

if (isNaN(input)) {
    alert('Було введено не число, попробуйте ще раз');
    continue;
}    


input = Number(input)

numbers.push(input)



}
// console.log(numbers);


if (numbers.length > 0) {
    // console.log(`Загальна сума чисел дорівнює [сума]`);
    for (const num of numbers) {
        console.log(num);
        total += num
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
    
}