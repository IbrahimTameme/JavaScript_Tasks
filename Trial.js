"use sctrict";
let b = prompt("enter button name")
let namee =  document.getElementsByClassName("btn");
namee[0].innerHTML = b ;
function create ()
{
let x = prompt("entername" , "s");
let y = prompt("entername" , "s");
let z = prompt("entername" , "s");
let Cr_P = document.createElement(x);

let Cr_s = document.createElement(y);
let text = document.createTextNode(z);

document.body.appendChild(Cr_P);
Cr_P.appendChild(Cr_s);
Cr_s.appendChild(text);
}
  
    
         
         
         
        
        

    
    





