// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//     console.log(key); // title author genres rating
//     console.log(book[key]);
// }



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }



// const apartament = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const vaalues = [];
// const keyys = [];
// const newKeys = Object.keys(apartament);
// for (const key of newKeys) {
//   keyys.push(key);
//   vaalues.push(apartament[key]);
// }
// console.log(keyys);   // ['descr', 'rating', 'price']
// console.log(vaalues); // ['Spacious apartment in the city center', 4, 2153]



function countProps(object) {
  return Object.keys(object).length;
}
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));



function countTotalSalary(salaries) {
  let totalSalary = 0;
  const eachSalary = Object.values(salaries);
  for (const salary of eachSalary) {
    totalSalary += salary;
  }
  return totalSalary;
}
console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));



const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

// Перебираємо масив об'єктів
for (const color of colors) {
  hexColors.push(color.hex); // Додаємо значення властивості hex
  rgbColors.push(color.rgb); // Додаємо значення властивості rgb
}

console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]



function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}
console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine"));



function fillArray(min, max){
  let arr = [];
  for (let i = min; i <= max; i += 2){
    return arr.push(i)
  }
}
console.log(fillArray(2, 10)); // 1



function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let result  = [];
  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      result.push(product[propName]);
    }
  } 
  return result;
}
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));



function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const product of products) {
    if (product.name === productName) {
      return (product.price * product.quantity)
    } 
  }
   return `Product ${productName} not found!`;
}
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Blaster"));



const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};
atTheOldToad.addPotion("Invisibility");
atTheOldToad.addPotion("Power potion");
console.log(atTheOldToad.getPotions()); // добавилось 2 значення до масиву potions



const atTheOldedToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const eachPotion of this.potions) {
      totalPrice += eachPotion.price;
    }
    return totalPrice;
  },
};
console.log(atTheOldedToad.getTotalPrice()); // 970



const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
		for(const book of this.books) {
			if(book.title === bookName) {
				book.rating = newRating;
			}
		}
	}
};
bookShelf.changeRating("The Mist", 9);
bookShelf.changeRating("The Last Kingdom", 4);
console.log(bookShelf.books);



const atTheOlderToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },
};
atTheOlderToad.updatePotionName("Stone skin", "Invisibility");
atTheOlderToad.updatePotionName("Speed potion", "Polymorth");
console.log(atTheOlderToad.potions);



function addOverNum(value, ...args) {
  let total = 0;
  for (const num of args) {
    if (value < num) {
      total += num;
    }
  }
  return total;
}
console.log(addOverNum(50, 15, 27)); // 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // 218



function getExtremeScores(scores) {
  const best = Math.max(...scores);
  const worst = Math.min(...scores);
  return {best, worst};
}
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));



const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
console.log(allScores);
console.log(bestScore);
console.log(worstScore);