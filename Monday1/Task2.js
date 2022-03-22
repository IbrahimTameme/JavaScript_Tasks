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



//////////5
//entered cat and didn,t use it and used x that is not defined 
//7 is not a parameater
//u gave function charc and x is also char

///////////6 

// function double1(x) {
//   return 2 * x ;
// }

// function double2 (x)
// {
// return 2 * x;
// }

// function  double3 (x) {
//   return 2 * x;
// }

//////////////////////7
function cubee (x)
{
    let y = x * x * x ;
 return  y;
}
//////////////////////////8
function multiplie (x ,y )
{ 
 return  x * y;
}
/////////////////////9
 function canIGetADrivingLicense (x)
{
    let y = 20-x;
if (x >= 20)
{
 
 return "yes you can" ;
}
else
{ 
 return "please come back after " + y + " years to get one" ;
}

}
///////////////////10
function sameLength (x ,y)
{
     
      
     if ( x.length == y.length )
     {
         return "True";
     }
     else 
     {
         return "False";
     }
}
///////////////////11
function largerNubmer (x ,y )
{
    if (x > y)
    {
        return x;
    }
    else if (y > x)
    {
 return y;
    }
    else 
    { 
        return "they are equal" ;
    }
}
///////////////////12
function smallerNubmer (x , y , z)
{
    if (x < y || x < z)
    {
        return x;
    }
    else if (y < x || y < z)
    {
        return y;

    }
    else 
    {
        return z;
    }
}
///////////////////13
function shorterString (a , b ,c ,d ,e)
{
    let x = [a , b, c , d, e]
    let y = x[0];
    for(let i = 0 ; i < x.length ; i++)
    {
        if (x[i]< y)
        {
            y = x[i];
        }

    }
    return y;
}
///////////////////14
function longerString (a , b ,c ,d)
{
    let x = [a , b, c , d]
    let y = x[0];
    for(let i = 0 ; i < x.length ; i++)
    {
        if (x[i]>y)
        {
            y = x[i]
        }

    }
    return y;
}
///////////////////15
function isEven (x)
{
    if (x%2 == 0)
    {
        return "true";
    }
    else
    {
        return "false";
    }
}
///////////////////16
function isodd (x)
{
    if (x%2 == 0)
    {
        return "false";
    }
    else
    {
        return "true";
    }
}
///////////////////17
function positive (x)
{
    if(x <0)
    {
        x = x + (x*2);

    }
    else
    {
        return x ;
    }

}



