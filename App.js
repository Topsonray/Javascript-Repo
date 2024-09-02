// In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old. It will take your current age as the input and console.logs a message with our time left in this format: You have x days, y weeks, and z months left.

function lifeInWeeks(age) {
   
/************Don't change the code above************/    
   
    //Write your code here.
    var age=alert("Enter Your Current Age?");
    daysLeft=(90-age)*365;
    weeksLeft=(90-age)*52;
    yearLeft=(90-age)*12;
    console.log("You have:" +daysLeft +'days' + ',' +weeksLeft +'weeks'+ ',' +monthsLeft +'months'+'left');
   

   
/*************Don't change the code below**********/
}



// ******************************LOVE CALCULATE************************************************


function loveCalculator(name1, name2) {
   
    let matchPercentage = Math.floor(Math.random() * 101);
    
    return `${name1} and ${name2} are ${matchPercentage}% match!!`;
}

let result = loveCalculator("John", "Mary");
console.log(result);++