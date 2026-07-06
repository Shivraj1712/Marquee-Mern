function CheckOdd(x) {
    return x % 2 != 1;
}
function CheckEven(x){
    return x % 2 == 0;
}
function CheckAdmin(x) {
    if(x == "Admin") return true
    else false
}

function canVote(x) {
    if(x >= 18) return true;
    else return false;
}

function canDrive(x) {
    if(x >= 21) return true;
    else return false;
}
const checkWeekDays = (x) => {
    if (x ==1) return "Monday"
    else if(x == 2) return "Tuesday"
    else if(x == 3) return "Wednesday"
    else if(x == 4) return "Thursday"
    else if(x == 5) return "Friday"
    else if(x == 6) return "Saturday"
    else if(x == 7) return "Sunday"
    else return "Invalid Input"
}

console.log(checkWeekDays(3))