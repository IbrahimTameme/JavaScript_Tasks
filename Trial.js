"use sctrict";




class country 
{
    constructor (capital , continent , independence_year)
    {
        this.a = capital ;
        this.b = continent ;
        this.c = independence_year;
    }
    

    capital ()
    {
        return this.a ;
    }
    

}

class subclass1 extends country 
{

}


let jordan = new country("Amman" , "asia" , "1955") ; 
let korea = new subclass1("Seoul" , "asia" , "1948");
let egypt = new  country ("cairo" , "africa" , "1922");
document.getElementById("id1").innerHTML = jordan.a + " " + jordan.b + " " + jordan.c ; 
document.getElementById("id2").innerHTML = egypt.a + " "  + egypt.b  + " "  + egypt.c; 
document.getElementById("id3").innerHTML = jordan.capital() ;
document.getElementById("id4").innerHTML = korea.capital() ;
document.getElementById("id5").innerHTML = korea.a + " "  + korea.b  + " "  + korea.c; 







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
  
    
         
         
         
        
        

    
    





