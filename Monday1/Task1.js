'use strict';

/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the’, ‘fox' 'over' lazy, 'dog',  ]

*/

/*
2
What is the index of "Banana”, Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

////////////////////////////3
let myfav = ["Mansaf", "pizza", "burger", "Mnade", " mjdra", " football", " swimming ", " vollybal", "running ", "AOT", "Ironman", "1000mabrok", "yes" ];
////////////////////////////4
function firstofarray(x)
{
   return x[0];
}
////////////////////////////5
function lastofarray(x)
{
   return x = x[ x.length - 1];
}
////////////////////////////6
let array= [0,5,7,9];
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);
array.push(10);
////////////////////////////7
let array2= [0,5,7,9];
array2.shift();
array2.push(-7);
array2.push(3.5);
array2.splice(1 ,1);
// push + unshift returns the new length of the array 
// pop + shift returns the deleted item
////////////////////////////8
let array3= [0,5,7,9,6,6];
let array4= [0,5,7,9,10];

 function middleofarray (x)
 {

     let arrlength = x.length ;
     let mnum_forodd = (arrlength-1) / 2;
     let mnum_foreven1 = (arrlength-2) / 2;
     let mnum_foreven2 = (arrlength) / 2;
     
     if (arrlength%2 == 0 )
      {
         return   x = [x [ mnum_foreven1 ]  , x [mnum_foreven2]];
          
     }
     else
     {
          return x =  x [mnum_forodd] ;
        }
    
     
 }
 ////////////////////////////9
 let animals = ['cat', 'ele', 'bird'] ;
 animals[1] = 'elephant' ;
 animals[3] = 'zybra' ;
 let  nums= [1,2,3,8,9];
 nums.splice(0,5);
 nums.push(5,-22,3.5,44,98,44);
 ////////////////////////////10
 let array5= [0,5,7,9];
 function indexOfArray(x , y)
{
    return x = x[y-1];
};
////////////////////////////11
function arrayExceptLast (x)
{
    let arr_len = x.length;
     let output = [];
    for (let i = 0 ; i < arr_len -1 ; i++)
    {
        output.push(x[i]);

    }
    return output
}
////////////////////////////12
function addToEnd (x , y)
{
     x.push(y);
     return x;
}
////////////////////////////13
function sumArray (x)
{
    let sum = 0 ; 
    
    for ( let i=0 ; i < x.length ; i++)
    {
        sum = sum + x [i] ;
        
    }
    return sum ;
}
function sumArray2 (x)
{
    let sum = 0 ; 
    let i = 0 ; 
    while( i < x.length )
    {
        sum = sum + x [i] ;
        i++;
    }
    return sum ;
}
////////////////////////////14
function minInArray (x)
{
    let lowest = x[0] ; 
    for (let i=0 ; i < x.length ; i++)
    {
        
        if (x[i] < lowest)
        {
            lowest = x[i];
        }
    }
    return lowest ; 
}
////////////////////////////15
function removeFromArray(x,y)
{
    for (let i=0 ; i<x.length ; i++)
    {
        if (y == x[i])
        {
            x.splice(i,1);
        }
    }
    return x ;
}
function removeFromArray2(x,y)
{
    let i =0;
    while(i < x.length)
    {
        if (y == x[i])
        {
            x.splice(i,1);
        }
        i++
    }
    return x ;
}

