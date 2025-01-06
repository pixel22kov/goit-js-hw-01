function checkStorage(available, ordered) {
  if (ordered > available) {
    return `Not enough goods in stock!`;
  } else {
    return `Order is processed, our manager will contact you`;
  }
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130))



function checkAge(age) {
  if (age >= 18) {
    return 'You are an adult';
  }
}
console.log(checkAge(20));
console.log(checkAge(17))



function checkStorageSecond(available, ordered) {
  if (ordered === 0) {
    return `There are no products in the order!`;
  } else if (available < ordered) {
    return `Your order is too large, there are not enough items in stock!`;
  } else {
    return `The order is accepted, our manager will contact you`;
  }
}
console.log(checkStorageSecond(100, 0));
console.log(checkStorageSecond(100, 130));
console.log(checkStorageSecond(100, 99))



function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return login = password === correctPassword ? `Access granted` : `Access denied, wrong password!`;
}
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("jqueryismyjam"))


function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return 0;
    case "professional":
      return 20;
    case "organization":
      return 50;
    default:
      return "Invalid subscription type!";
  }
}
console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"))



function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  return isInRange;
}
console.log(isNumberInRange(10, 20, 15));
console.log(isNumberInRange(10, 20, 25));



function checkAccess(subType) {
  return subType === "pro" || subType === "vip";
}
console.log(checkAccess("pro")); // true
console.log(checkAccess("vip")); // true
console.log(checkAccess("free")); // false
console.log(checkAccess("starter")); // false



function toggleModalVisibility(isVisible) {
  return !isVisible;
}
console.log(toggleModalVisibility(true));  // false
console.log(toggleModalVisibility(false)); // true



function getSubstring(string, length) {
  return string.slice(0, length);
}
console.log(getSubstring("Hello, world!", 3));
console.log(getSubstring("Hello, world!", 5));
console.log(getSubstring("Hello, world!", 11));



function normalizeInput(input, to) {
  if (to === "lower") {
    return input.toLowerCase(); 
  } else if (to === "upper") {
    return input.toUpperCase(); 
  } else {
    return input; // Якщо значення `to` не "lower" і не "upper", повертаємо оригінальний рядок
  }
}
console.log(normalizeInput("This ISN'T SpaM", "lower"));
console.log(normalizeInput("Stay Awhile and Listen", "upper"));



function checkForName(fullName, firstName) {
  const normalizedFullName = fullName.toLowerCase();
  const normalizedFirstName = firstName.toLowerCase();
  return normalizedFullName.includes(normalizedFirstName);
}
console.log(checkForName("Jason Neis", "jAsOn"));
console.log(checkForName("Jason Neis", "Jacob"));
console.log(checkForName("Caty Stars", "cAtY"));
console.log(checkForName("Caty Stars", "Andromeda"));



function checkFileExtension(fileName, ext) {
  // Перевіряємо, чи закінчується fileName на ext
  if (fileName.endsWith(ext)) {
    return "File extension matches";
  } else {
    return "File extension does not match";
  }
}
console.log(checkFileExtension("styles.css", ".css"));
console.log(checkFileExtension("index.html", ".css"));



function getFileName(file) {
  // Знаходимо позицію першої крапки в рядку
  const dotIndex = file.indexOf('.');
  // Якщо крапки немає (dotIndex === -1), повертаємо оригінальний рядок
  if (dotIndex === -1) {
    return file;
  }
  // Якщо крапка є, повертаємо частину рядка до неї
  return file.slice(0, dotIndex);
}
console.log(getFileName("styles.css"));
console.log(getFileName("index.html"));
console.log(getFileName("app"));



function createFileName(name, ext) {
  const trimmedName = name.trim();
  const fullName = `${trimmedName}.${ext}`;
  return fullName;
}
console.log(createFileName("   order ", "txt")); // Очікуємо: "order.txt"
console.log(createFileName("  finance ", "xml")); // Очікуємо: "finance.xml"
console.log(createFileName("  report", "csv"));  // Очікуємо: "report.csv"
console.log(createFileName(" file ", "json")); // Очікуємо: "file.json"



function calculateTotal(number) {
  let total = 0;
  let current = 1;
  while (current <= number) {
    total += current;
    current += 1;
  }
  return total;
}
console.log(calculateTotal(1));  // Очікуємо: 1
console.log(calculateTotal(3));  // Очікуємо: 6
console.log(calculateTotal(0));  // Очікуємо: 0
console.log(calculateTotal(18)); // Очікуємо: 171
console.log(calculateTotal(24)); // Очікуємо: 300



function calculateTotalNum(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
   total += i;
}
  return total;
}
console.log(calculateTotalNum(1));  // Очікуємо: 1
console.log(calculateTotalNum(3));  // Очікуємо: 6
console.log(calculateTotalNum(7));  // Очікуємо: 28
console.log(calculateTotalNum(24));  // Очікуємо: 300



function calculateEvenTotal(number) {
  let total = 0; // Ініціалізуємо змінну для накопичення суми
  for (let x = 1; x <= number; x++) { // Перебираємо всі числа від 1 до number
    if (x % 2 === 0) { // Перевіряємо, чи є число парним
      total += x; // Додаємо парне число до total
    }
  }
  return total; // Повертаємо загальну суму
}
console.log(calculateEvenTotal(1));  // Очікуємо: 0
console.log(calculateEvenTotal(3));  // Очікуємо: 2
console.log(calculateEvenTotal(18));  // Очікуємо: 90
console.log(calculateEvenTotal(27));  // Очікуємо: 182



const start = 6;
const end = 17;
let number;

for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number); // 10



function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      return i; // Повертаємо число, яке ділиться на divisor без залишку
    }
  }
}
console.log(findNumber(2, 6, 5)); // 5
console.log(findNumber(8, 17, 3)); // 9
console.log(findNumber(16, 35, 7)); // 21