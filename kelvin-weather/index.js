/* Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

Task: Convert Kelvin to Celsius, then to Fahrenheit.*/

// This is today's forecast 
const kelvin = 0;
// This is today's forecast in Celsius
const celsius = kelvin - 273;
// This is today's forecast in Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounded down Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees Newton.`);