const myDate = new Date();

console.log(myDate.getDate()); // just get the current date like 5 or 6
console.log(myDate.getDay()); // just get the current date like 5 or 6
console.log(myDate.getFullYear()); // just get the current year value
console.log(myDate.getHours()); // current hours: 04 or 14
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes()); // current minute
console.log(myDate.getMonth()); // current month
console.log(myDate.getSeconds()); // current second
console.log(myDate.getTime()); //
console.log(myDate.getTimezoneOffset()); //
console.log(myDate.getUTCDate()); //
console.log(myDate.getUTCDay()); //
console.log(myDate.getUTCFullYear()); //
console.log(myDate.setDate(4 / 4 / 2023)); //
console.log(myDate.toDateString()); // Sat Jul 06 2024
console.log(myDate.toISOString()); // 2024-07-06T08:55:39.408Z
console.log(myDate.toLocaleDateString()); // 7/6/2024
console.log(myDate.toLocaleString()); // 7/6/2024, 2:59:42 PM
console.log(myDate.toLocaleTimeString()); // 3:00:01 PM
console.log(myDate.toString()); // Sat Jul 06 2024 15:00:23 GMT+0600 (Bangladesh Standard Time)
console.log(myDate.toTimeString()); // 15:00:47 GMT+0600 (Bangladesh Standard Time)
console.log(myDate.toUTCString()); // Sat, 06 Jul 2024 09:01:14 GMT
console.log(myDate.getTimezoneOffset()); // -360

const newDate = new Date();
// Custom format function
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const value = formatDate(newDate);
console.log(value); // 2024-07-06

console.log(Date.now()); // 1720257640217 - for use case of comparing

const value1 = newDate.toLocaleString("default", {
  weekday: "long",
});
console.log(value1); // Saturday
