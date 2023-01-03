// Mon - 7 am
// Tue - Thurs - 4 am
// Fri - 9 am
// Sat - Sun - 8 am

let day = "Tuesday";

switch(day)
{
    case "Monday":
        console.log("7 am");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("4 am");
        break;
    case "Friday":
        console.log("9 am");
        break;
    case "Saturday":
    case "Sunday":
        console.log("8 am");
        break;
    default:
        console.log("7 am - Watch Telusko Videos");
        break;
}