'use strict'
//////////////////////////////1
let arr1 = [2,4,5,7];
function doubleNumbers (arr)
{
    let newarr = arr.map((x,y) =>
    {
        return x *2;

    })

    return newarr
}
//////////////////////////////2
function stringItUp(arr)
{
    let newarr = arr.map((x,y)=>
    {
       
        return String(x);
    })
    return newarr
}
//////////////////////////////3
let arr2 = ["name" , "hello" , "hhh"]
function capitalizeNames (arr)
{
    let newarr = arr.map((x,y)=>
    {
       
        return x.charAt(0).toUpperCase() + x.slice(1);
        ;
    })
    return newarr
}
//////////////////////////////////4
 let namessOnly=[
       {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
       ]
       function namesOnly(arr)
       {
           let newarr = arr.map(i => i.name);
           return newarr;
       }
///////////////////////////////////////5
function cantheygo(arr)
       {
           let newarr = arr.map(i =>
            {
                if (i.age >=18)
                {
                    console.log(`${i.name} can go to matrix`);
                }
                else
                  console.log(`${i.name} cant go to matrix`);


            } );
           return newarr;
       }
 ///////////////////////////////////////6
 function readyToPutInTheDOM (arr)
 {
     let newarr = arr.map(i =>
        {
            return `<h1> ${i.name} </h1> <h2>${i.age}</h2>`
    
        })
        return newarr ;
 }
 ///////////////////////////////////////7

 function doubleValues (arr)
 {
     let newarr = arr.map(i =>
        {
            return i * i ;
        })
        return newarr
 }
  ///////////////////////////////////////8
  function valTimesIndex  (arr)
  {
      let newarr = arr.map((i , z) =>
         {
             return i * z ;
         })
         return newarr
  } 
  ///////////////////////////////////////9
  console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') ); 
  function extractKey(arr, key){
    let newarr = arr.map(arr => arr[key])

         return newarr
 }
  ///////////////////////////////////////10

  function extractFullName (arr){
    let newarr = arr.map(i => i.first + " " + i.last)
    return newarr
 }