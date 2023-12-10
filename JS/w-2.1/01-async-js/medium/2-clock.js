// function getCurrentTime() {
// const date = new Date();
//   const HH = date.getHours() % 2;
//   const MM = date.getMinutes();
//   const SS = date.getSeconds();

//   return `${HH}::${MM}::${SS} ${date.getHours() >= 12 ? "PM" : "AM"}`;
// }

const intervalId = setInterval(() => {
  const date = new Date();
  const HH = date.getHours() % 12 || 12;
  const MM = date.getMinutes();
  //   If we want to see in two digit letters
  const SS =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  console.log(`${HH}::${MM}::${SS} ${date.getHours() >= 12 ? "PM" : "AM"}`);
}, 1000);

// HH:MM::SS AM/PM

/*
function getCurrentTime(format) {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = "AM";

  // Convert hours to 12-hour format and set AM/PM
  if (format === "12-hour") {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Handle midnight (12:00 AM)
  }

  // Add leading zeros if needed
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Construct the time string based on the format
  let timeString;
  if (format === "12-hour") {
    timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  } else {
    timeString = `${hours}:${minutes}:${seconds}`;
  }

  return timeString;
}

// Update the clock every second
setInterval(() => {
  const time12Hour = getCurrentTime("12-hour");
  //   const time24Hour = getCurrentTime("24-hour");
  console.log(`12-Hour Format: ${time12Hour}`);
  //   console.log(`24-Hour Format: ${time24Hour}`);
}, 1000);
*/
