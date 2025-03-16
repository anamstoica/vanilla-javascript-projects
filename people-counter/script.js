let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count);
}
increment()

 
function save() {
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}
save()

let welcomeEl = document.getElementById("welcome-el");

let myName = "";
let myGreeting = "Welcome back"

welcomeEl.textContent = myGreeting + myName;

welcomeEl.textContent = welcomeEl.textContent + "!";