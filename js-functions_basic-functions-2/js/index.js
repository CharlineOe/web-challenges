console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/
const book = "Harry Potter";
const author = "JKR";
let rating = 1.5;
let sales = 120;
sales = sales + 10;
sales += 200;
sales += 200;
sales += 200;
sales += 200;
sales += 200;


// --v-- write your code here --v--
function logBookData() {
  console.log(book);
  console.log(author);
  console.log(rating);
  console.log(sales);
}
logBookData();

/*3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
