function leapYear(year){
    if(year%400===0){
        console.log("This year is Leap Year.");
    }
    else if(year%4===0 && year%100!=0)
    {
        console.log("This year is Leap Year.");
    }
    else{
        console.log("This year is not leap Year.");
    }
}
//leapYear(2000);
leapYear(2043);