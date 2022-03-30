"use sctrict";


let text = `Lorem Ipsum is simply dummy text of the printing and typesetting 

industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`; 


let n = text.replace(/ipsum$/im , "lolo");
document.getElementById("demo").innerHTML = n;















































// let ulparent = document.getElementById("fold");
// ulparent.style.margin = "15px"

// async function getdata()
// {
//     let respone = await fetch("https://eu1.locationiq.com/v1/search.php?key=pk.146180d54ef1b81b7922cf956cba402d&q=amman&format=json")
//     // console.log( respone);
//     let data = await respone.json()
//     console.log( data);
// //     let i = [data];
// //     console.log(i);

// data.map((x,y)=>
//  {
//      let lichild = document.createElement("li");
//      lichild.style.listStyleType = "none";
//      lichild.style.textAlign="center"
//      lichild.style.border  = "2px solid black";
//      lichild.style.padding = "10px"
//      let i = x.display_name.split(",",2)
//      lichild.innerHTML = ` <h3 style=" color:red ;">display name: </h3>
//       ${i} 
//       <h3 style=" color:red ;"> lat: </h3> ${x.lat} 
//       <h3 style=" color:red ;"> lon: </h3> ${x.lon}`;
//      ulparent.appendChild(lichild);
 

//  })
//  return data
//  }


// getdata()





//////////////////////////////////////promise
// var checck = new Promise(function(x , y){
//  let i = document.getElementById("input").value ;
//  if(i === "sure")
//  {
//      x("u will have good time")
//      document.getElementById("result").innerText = "u will have good time";
//  }
//  else
//  {
//      y(Error("you will be disapponted"));
//      document.getElementById("result").innerText = "you will be disapponted";
//  }


// })











//////////////////////map
// let str = ["a" ,"b" ,"c"];
// let nwar = str.map(function(x,y)
// {
//     return x + "a";
// })

// console.log(nwar);



// class country 
// {
//     constructor (capital , continent , independence_year)
//     {
//         this.a = capital ;
//         this.b = continent ;
//         this.c = independence_year;
//     }
    

//     capital ()
//     {
//         return this.a ;
//     }
    

// }

// class subclass1 extends country 
// {

// }


// let jordan = new country("Amman" , "asia" , "1955") ; 
// let korea = new subclass1("Seoul" , "asia" , "1948");
// let egypt = new  country ("cairo" , "africa" , "1922");
// document.getElementById("id1").innerHTML = jordan.a + " " + jordan.b + " " + jordan.c ; 
// document.getElementById("id2").innerHTML = egypt.a + " "  + egypt.b  + " "  + egypt.c; 
// document.getElementById("id3").innerHTML = jordan.capital() ;
// document.getElementById("id4").innerHTML = korea.capital() ;
// document.getElementById("id5").innerHTML = korea.a + " "  + korea.b  + " "  + korea.c; 







// class country 
// {
//     constructor (capital , continent , independence_year)
//     {
//         this.a = capital ;
//         this.b = continent ;
//         this.c = independence_year;
//     }

//     capital ()
//     {
//         return this.a ;
//     }
    

// }
// class subclass1 extends country 
// {

// }

// let jordan = new country("Amman" , "asia" , "1955") ; 
// let korea = new subclass1("Seoul" , "asia" , "1948")
// let egypt = new  country ("cairo" , "africa" , "1922");
// document.getElementById("id1").innerHTML = jordan.a + " " + jordan.b + " " + jordan.c ; 
// document.getElementById("id2").innerHTML = egypt.a + " "  + egypt.b  + " "  + egypt.c; 
// document.getElementById("id3").innerHTML = jordan.capital() ;
// document.getElementById("id4").innerHTML = korea.capital() ;
// document.getElementById("id5").innerHTML = korea.a + " "  + korea.b  + " "  + korea.c; 







///////////////////////
// let text = "ibrahim kaldon ahmad abdalqader"
// console.log(text[4]);
// let result = text.indexOf("kaldon");
// let a = text.lastIndexOf("kaldon");
// document.getElementById("id1").innerHTML = a;




//////////////////Example on create element from user 
// let b = prompt("enter button name")
// let namee =  document.getElementsByClassName("btn");
// namee[0].innerHTML = b ;
// function create ()
// {
// let x = prompt("entername" , "s");
// let y = prompt("entername" , "s");
// let z = prompt("entername" , "s");
// let Cr_P = document.createElement(x);

// let Cr_s = document.createElement(y);
// let text = document.createTextNode(z);

// document.body.appendChild(Cr_P);
// Cr_P.appendChild(Cr_s);
// Cr_s.appendChild(text);
// }
  
    
         
         
         
        
        

    
    





