"use strict";
//////////////////////////////////////////////1
function tellFortune (num,name,loc,job)
{
 return "You will be "+ job + "in " + loc + ", and married to " + name + " and have " + num + " kids";
} 
//////////////////////////////////////////////2
function calculateDogAge (x)
{
    let dog_age = x * 7 ; 
    return "Your doggie is " + dog_age + " years old in dog years!";
}
//////////////////////////////////////////////3
function calculateSupply (x , y)
{
    let food_cons = 0 ; 
    do
    {
        x++; 
        food_cons = food_cons + y*365;

    }
    while (x < 100);
    
    return food_cons;
        
    
}


//////////////////////////////////////////////3

function greet (x)
{
    return "Hello " + x;
}


//////////////////////////////////////////////3



//////////////////////////////////////////////3
