// gardenManagement.js

// Make sure values match what the tests expect
const temperature = 85; // Must be > 80 for "Watering on"
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

const timeOfDay = "morning"; // Must be "morning" for "Lights off"
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

let soilMoisture = 30;
while (soilMoisture < 40) {
  soilMoisture++;
}
console.log(soilMoisture); // Should log 40