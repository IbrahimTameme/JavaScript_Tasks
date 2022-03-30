'use strict';
let regform = document.getElementById("regform")
let alertdivs = document.getElementsByClassName("alert")
let dataarr = []
let fname ;
let lname; 
let birthdate ; 
let email1;
let email2;
let password1;
let password2;

function checkforregistration()
{


  fname = document.getElementById("firstname").value; 
   lname = document.getElementById("lastname").value; 
   birthdate = document.getElementById("birthdate").value; 
   email1 = document.getElementById("email").value; 
   email2 = document.getElementById("confirmemail").value; 
   password1 = document.getElementById("password").value; 
   password2 = document.getElementById("confirmpassword").value; 
   
   let checkname = /[0-9 |!"£%^&*(_) %]/gim

   
 
  
  
    let fnamecheck = fname.search(checkname);
if(fnamecheck >= 0)
   {
    alertdivs[0].innerHTML = "Name not allowed, name should not have anything than text:"
    
    alertdivs[0].style.display = "block"
}
else
{
 alertdivs[0].innerHTML = ""
 alertdivs[0].style.display = "none"
}
////////////////////////
 let lnamecheck = lname.search(checkname);
   if(lnamecheck >=0)
   {
    alertdivs[1].innerHTML = "Name not allowed, name should not have anything than text:"
    alertdivs[1].style.display = "block"
    
   }
   else
   {
    alertdivs[1].innerHTML = ""
    alertdivs[1].style.display = "none"
   }
////////////////////////
 var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
if (!(date_regex.test(birthdate))) {
    alertdivs[2].innerHTML = "Not the right date context:"
    alertdivs[2].style.display = "block"
      
   }
   else
   {
    alertdivs[2].innerHTML = ""
    alertdivs[2].style.display = "none"
   }
////////////////////////

 let checkemail= /\S+@\S+\.\S+/

   if(!checkemail.test(email1))
   {
       alertdivs[3].innerHTML = "Not the right email context:"
       alertdivs[3].style.display = "block"
       
       
   }
   else
   {
    alertdivs[3].innerHTML = ""
    alertdivs[3].style.display = "none"
   }
////////////////////////
   if(email2 != email1)
   {
    alertdivs[4].innerHTML = "Emails do not match"
    alertdivs[4].style.display = "block"
    
    
}
else
{
 alertdivs[4].innerHTML = ""
 alertdivs[4].style.display = "none"
}
////////////////////////
let capitalcheck = /^[A-Z]/m
let checkpasswordcapital = password1.search(capitalcheck)

if(checkpasswordcapital !=0  )
{
    
    alertdivs[5].innerHTML = "First letter should be capital  "
    alertdivs[5].style.display = "block"
}
else
{
 alertdivs[5].innerHTML = ""
 alertdivs[5].style.display = "none"
}
////////////////////////
let numberscheck = /[0-9]/g
let passwordnumbercheck = [0];

 passwordnumbercheck += password1.match(numberscheck)
if( passwordnumbercheck.length < 4 || passwordnumbercheck.length ==5)
{
 alertdivs[5].innerHTML +=  "need 2"
}
let symbolcheck = /[!"£$%^&*()_+=-]/g
let passwordsymbolcheck = password1.search(symbolcheck)
if(passwordsymbolcheck != 0)
{
    alertdivs[5].innerHTML +=  "need at least one symbol"
}
////////////////////////
if(password2 != password1)
{
    alertdivs[6].innerHTML = "passwords do not match"
    alertdivs[6].style.display = "block"
    
    
}
else
{
 alertdivs[6].innerHTML = ""
 alertdivs[6].style.display = "none"
}






}
setInterval(() => {
   
   checkforregistration()

}, 200);

regform.addEventListener("submit",toformdata)
function toformdata(event)
{
    event.preventDefault();
document.getElementById("demo2").innerHTML = fname +" " +  lname;
dataarr.push(fname)
dataarr.push(lname)
let namestr = JSON.stringify(dataarr)
localStorage.setItem("data",namestr)

    
}









//  console.log(fname , lname , birthdate , email1 , email2 , password1 , password2);   

