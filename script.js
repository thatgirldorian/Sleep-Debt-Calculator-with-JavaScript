//Function that tells how much sleep you get per night
 const normalSleepCount = day => {
   if (day === "monday") {
     return 8; 
   } else if (day === "tuesday") {
     return 8;
   } else if (day === "wednesday") {
     return 8; 
   }  else if (day === "thursday") {
     return 8; 
   }  else if (day === "friday") {
     return 8; 
   }  else if (day === "saturday") {
     return 8; 
   }  else if (day === "sunday") {
     return 8; 
   } else {
     return "You aren't getting enough sleep."
    }
   
};

//Quick test to see if function works
console.log(normalSleepCount("monday"));

//Function that gets the total hours you slept last week
const getActualHours = () => {
normalSleepCount("monday") + normalSleepCount("tuesday") + normalSleepCount("wednesday") +
normalSleepCount("thursday") +
normalSleepCount("friday") +     normalSleepCount("saturday") +
normalSleepCount("sunday");
};

//This function gets your ideal sleep hours
const getIdealSleepHours = () => {
  let idealHours = 5;
  return idealHours * 7;
}

//A quick test to see if the function works. This will print the amount of sleep you currently get.
console.log(getIdealSleepHours());

//This will print "You aren't getting enough sleep" if the ideal number is lower than 8/day.
console.log(normalSleepCount());

//This function gets the amount of sleep you owe
const getSleepDebt = () => {
  let actualSleepHours = getActualHours();
  
  let idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log("You're getting the right amount of sleep. That's great.");
  } else if (actualSleepHours > idealSleepHours) { 
    console.log(`You got ${idealSleepHours} - ${actualSleepHours} hour(s). That's a looooot of sleep, sis.`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You got ${idealSleepHours} - ${actualSleepHours} hour(s). You should probably get more rest.`);
  }
};

//Test to see if the program works. 
console.log(getSleepDebt());


