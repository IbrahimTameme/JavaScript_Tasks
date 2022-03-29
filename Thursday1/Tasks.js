'use strict';
///////////////////////////////////////////1
let me ={
    firstname : "ibrahim",
    lastname : "Tameme",
    age : 23,
    dob: Date("25 5 1998"),
    favirotemovie : [ "attackontitan" , "Breakingbad" , "themessage" ] ,
    favirotefood : ["mansaf" , "mande" , "pizza" , "friedchicken" , "mdry"] ,

}


var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
]
let a = [
    {
        id : 5 ,
        age : 55
    } ,
    {
        id : 6 ,
        age : 54
    }
    ,
    {
        id : 8 ,
        age : 53
    }

]

function reducer(acc,cur)
{
    return {...acc , [cur.id]:cur} ;
}
let b = a.reduce(reducer, {});
      


console.log( b);
///////////////////////////////////////////2

function firstName(x)
{
    let namearr = [];
    let i = 0 ;
    while (i < x.length)
    {
        namearr[i] = x[i].name.first ;
        i++;
    }
    return namearr ; 

}
///////////////////////////////////////////3
function averageAge(x)
{
    let sum = 0;
    for(let i = 0 ; i<x.length ; i++)
    {
        sum += x[i].age;

    }
    return sum/x.length;
}
///////////////////////////////////////////4
function olderperson(x)
{
    let highest = 0 ;
    let highestindex = 0 ; 
    let i = 0 ;
    while(i < x.length)
    {
        if (highest < x[i].age)
        {
            highestindex = i ;
            highest = x[i].age
        }
        i++
    }
    return x[highestindex].name.first + " " + x[highestindex].name.last
}
///////////////////////////////////////////5+6
function longestName (x)
{
    let longest = x[0].name.first.length + x[0].name.last.length
    let longestindex = 0 ; 
    for(let i = 0 ; i<x.length ; i++)
    {
        if (x[i].name.first.length + x[i].name.last.length >= longest )
        {
            longestindex = i;
            longest = x[i].name.first.length + x[i].name.last.length ;
        }

    }
    return x[longestindex].name.first + " " + x[longestindex].name.last ;
}
///////////////////////////////////////////7
"ahmad ahmad ahmad ahmad ahmad ahmad ahmad ahmad"
// console.log(aa.split(' '));
function repeatWord(x){
    let changed =x.toLowerCase().split(' ')
    let output = {
        
    };
    let count =0;
    for (let i = 0 ; i < changed.length ; i++ )
    {  let try1 = output[changed[i]]
        console.log(try1);
        if (try1)
        {
            
            count = try1 ;
           
        }
        else
        {
            count = 0 
        }
        output[changed[i]] = count+1
    }
    return output
}
///////////////////////////////////////////8
function repeatletters(x){
    let changed =x.toLowerCase().split('')
    let output = {};
    let count =0;
    for (let i = 0 ; i < changed.length ; i++ )
    {  let try1 = output[changed[i]]
        
        if (try1)
        {
            count = try1 ;
            
        }
        else
        {
            count = 0 
        }
        output[changed[i]] = count+1
        
    }
    
    return output
}

///////////////////////////////////////////9