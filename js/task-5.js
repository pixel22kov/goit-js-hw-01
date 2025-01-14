function getOrderQuantity(order) {
    return order.length;
}
console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
console.log(getOrderQuantity(["apple", "banana"]));
console.log(getOrderQuantity([]));



function getLastElementMeta(array) {
    const lastIndex = array.length - 1; // Індекс останнього елемента
    const lastElement = array[lastIndex]; // Значення останнього елемента
    return [lastIndex, lastElement]; // Повертаємо масив з індекса і значення
}
console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
console.log(getLastElementMeta(["apple", "peach", "pear"]));
console.log(getLastElementMeta(["apple"]));



function getExtremeElements(array) {
    const lastIndex = array.length - 1; 
    const lastElement = array[lastIndex]; 
    const firstElement = array[0];
    return [firstElement, lastElement]; 
}
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
console.log(getExtremeElements(["apple", "peach", "pear"]));


const arr1 = [1, 2, 3];
const arr2 = arr1;
arr1[1] = 1;
arr2[2] = 1;
console.log(arr2); // [1, 1, 1]



const array = [1, true, "Poly"];
console.log(String(array));// "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"



function getLength(array) {
    const newString = array.join(''); // Перетворює масив у рядок без роздільників
    return newString.length; // Повертає кількість символів у рядку
}
console.log(getLength(["Mango", "hurries", "to", "the", "train"])); // 22
console.log(getLength(["M", "a", "n", "g", "o"])); // 5
console.log(getLength(["top", "picks", "for", "you"])); // 14



function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" "); // Розбиваємо на слова, роздільник пробіл
  const wordCount = words.length;  // Підраховуємо кількість слів
  const totalPrice = wordCount * pricePerWord; // Рахуємо загальну вартість
  return totalPrice; // Повертаємо результат
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));



const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits.slice(0, 2); // Перші два елементи
const nonExtremeEls = fruits.slice(1, -1); // Усі, крім першого і останнього
const lastThreeEls = fruits.slice(-3); // Три останні елементи

console.log(firstTwoEls); // ['apple', 'plum']
console.log(nonExtremeEls); // ['plum', 'pear', 'orange']
console.log(lastThreeEls); // ['pear', 'orange', 'banana']



const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);

console.log(allClients); // ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Peach', 'Houston']



function getSlice(array, value) {
  const index = array.indexOf(value); // Знайти індекс елемента value
  if (index === -1) {
    return []; // Якщо елемент не знайдено, повертаємо порожній масив
  }
  return array.slice(0, index + 1); // Повертаємо підмасив до елемента включно
}
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // ['Mango', 'Poly']
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // ['Mango', 'Poly', 'Ajax']
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); // ['Mango']
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // []



function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(1, 5));
console.log(createArrayOfNumbers(10, 15));



function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([164, 48, 291]));



function getEvenNumbers(start, end) {
  const evenNumbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}
console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
console.log(getEvenNumbers(2, 5));  // [2, 4]
console.log(getEvenNumbers(7, 7));  // []
console.log(getEvenNumbers(10, 20)); // [10, 12, 14, 16, 18, 20]



function checkStorage(storage, item) {
  const normalizedItem = item.toLowerCase();
  if (storage.includes(normalizedItem)) {
    return `${normalizedItem} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}
console.log(checkStorage(["apple", "plum", "pear"], "orange")); 
console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));  
console.log(checkStorage(["apple", "plum", "pear"], "PluM"));  



function getCommonElements(array1, array2) {
  const commonElements = []; // Порожній масив для зберігання спільних елементів
  for (const element of array1) { // Перебір кожного елемента array1
    if (array2.includes(element)) { // Перевірка, чи елемент присутній у array2
      commonElements.push(element); // Додавання елемента до нового масиву
    }
  }
  return commonElements; // Повернення масиву спільних елементів
}
console.log(getCommonElements([1, 3, 5], [0, 8, 5, 3])); // [3, 5]
console.log(getCommonElements([10, 20, 30], [15, 20, 25])); // [20]
console.log(getCommonElements([1, 2, 3], [4, 5, 6])); // []



function calculateTotalPrice(order) {
  let total = 0; // Ініціалізація змінної для зберігання суми
  for (const item of order) { // Цикл for...of для перебору елементів масиву
    total += item; // Додавання значення кожного елемента до total
  }
  return total; // Повернення загальної суми
}
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([]));



function createReversedArray(...args) { // ...args збирає всі передані аргументи функції в масив.
  return args.toReversed(); // Повертає новий масив із елементами у зворотному порядку
}
console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]



function calculateTax(amount, taxRate = 0.2) {
  return taxSum = (amount * taxRate);
}
console.log(calculateTax(100, 0.1)); // 10
console.log(calculateTax(100,)); // 20
console.log(calculateTax(100, 0.3)); // 30
console.log(calculateTax(200,)); // 40
