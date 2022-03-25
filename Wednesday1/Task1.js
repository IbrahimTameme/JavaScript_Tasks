function onhover ()
{
   let x = document.getElementsByTagName("button") ;
   x[0].innerHTML =  "Can I help you?";
} ;

function no_hover ()
{
   let y = document.getElementsByTagName("button") ;
   y[0].innerHTML =  "Hello World!";
}