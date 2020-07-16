const days = {
    MONDAY: 2,
    TUESDAY: 3,
    WEDNESDAY: 4,
    THURSDAY: 5,
    FRIDAY: 6,
    SATURDAY: 7,
    SUNDAY: 8
};
var date = new Date();
var dayOfMonth = date.getDate();
var dayOfWeek = date.getDay() + 1;
var month = date.getMonth();
var year = date.getYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
const getDayNamesByValue = Object.keys(days).find(key=>days[key] === dayOfWeek);
console.log("Today's day: "+ getDayNamesByValue);