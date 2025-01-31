function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName); // Викликаємо передану функцію з аргументом `pizzaName`
}
console.log(makeMessage("Royal Grand", makePizza));
console.log(makeMessage("Ultracheese", deliverPizza));



const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});



function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Використовуємо forEach з інлайн-колбеком
  orderedItems.forEach(function (item) {
    totalPrice += item; // Додаємо поточний елемент до totalPrice
  });
  return totalPrice; // Повертаємо загальну суму
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));



function filterArray(numbers, value) {
  const newArray = [];
  numbers.forEach(function (item) {
    if (item > value) {
      newArray.push(item);
    }
  })
  return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));



const calculateTotaalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}
console.log(calculateTotaalPrice(5, 100));
console.log(calculateTotaalPrice(8, 60));



const calculateTotalPprice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};
console.log(calculateTotalPprice([12, 85, 37, 4]));
console.log(calculateTotalPprice([412, 371, 94, 63, 176]));



const filterrArray = (numbers, value) => {
  const filteredNumbers = [];
  
  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
}
console.log(filterrArray([1, 2, 3, 4, 5], 3));
console.log(filterrArray([1, 2, 3, 4, 5], 5));
console.log(filterrArray([12, 24, 8, 41, 76], 38));



const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const thisNumbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(thisNumbers, 2);
console.log(thisNumbers);
console.log(doubledNumbers);



function changeEven(numbers, value) {
  const newArray = [];
  
  numbers.forEach(item => {
    if (item % 2 === 0) { 
      newArray.push(item + value);
    } else {
      newArray.push(item); // Якщо число не парне, додаємо його без змін
    }
  });
  
  return newArray; // Повертаємо результат
}
console.log(changeEven([1, 2, 3, 4, 5], 10));



const numbersNew = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbersNew.filter(number => number % 2 === 0);
const oddNumbers = numbersNew.filter(number => number % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);



const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};

const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acc, time) => acc + time, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime); // 2692
console.log(averagePlayTime); // 673



const newPlayers = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = newPlayers.reduce((acc, player) => {
  return acc + player.playtime / player.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame); // 1023.5