/* Task: Write a program that will register runners for the race and give them instructions on race day.

There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.

Early adults run at 9:30 am.
Late adults run at 11:00 am.

Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! */

let raceNumber = Math.floor(Math.random() * 100);
let earlyRunner = false;
let ageRunner = 19;
if (earlyRunner && ageRunner > 18) {
  console.log(raceNumber < 100 );
}
if (earlyRunner && ageRunner >18) {
  console.log(`Runner ${raceNumber}, the race will start at 9:30 am.`);
} else if (!earlyRunner && ageRunner > 18) {
  console.log(`Runner ${raceNumber}, the race will start at 11:00 am`);
} else if(ageRunner < 18) {
  console.log(`Racer number ${raceNumber}: youth registrants runs at 12:30 pm (regardless of registration)`);
} else {
  console.log ('Please see the registration desk.');
}