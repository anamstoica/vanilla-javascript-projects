/* Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.


Each year following equates to 4 dog years.
Task: Use JavaScript to convert your human age into dog years. */

// The value for my age
const myAge = 1;
// Don't know what this is yet
let earlyYears = 2;
earlyYears *= 10.5;
// Neither this
let laterYears = myAge - 2;
// Number of dog years accounted for by your later years
laterYears *= 4;
console.log(earlyYears, laterYears);
//My age in dog years
const myAgeInDogYears = earlyYears + laterYears;
const myName = 'Ana Stoica' .toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)