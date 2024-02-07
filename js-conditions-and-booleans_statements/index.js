console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 5;
const result = number % 2;

if (result === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 50000;
let totalPrice = numberOfHotdogs;

if (numberOfHotdogs <= 4) {
  console.log("2 Euro/Hot Dog");
} else if (numberOfHotdogs >= 5 < 100) {
  console.log("1,50€/Hot Dog");
} else if (numberOfHotdogs > 100 < 1000000) {
  console.log("1€/Hot Dog");
}
if (numberOfHotdogs > 1000000) {
  console.log("0,10€/Hot Dog");
}
// Part 4: Daytime
const currentHour = 18;

const statement = currentHour > 17 ? "WTF" : "Feierabend";

console.log(statement);

// Part 5: Greeting

const name = "Kalle";

const greeting = "Hello " + (name === "Archibald" ? name : "Trainer") + "!";

console.log(greeting);
