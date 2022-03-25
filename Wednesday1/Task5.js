

let txtmsg = document.getElementsByClassName("err");




function onchan()
{
    let x = document.getElementById("pass1").value;
console.log(x);
let y = document.getElementById("pass2").value;

    if (x.length < "6")
{
    txtmsg[0].innerHTML = "Password should be more than 6";
}
    
if (x.length >= "6")
{
    txtmsg[0].innerHTML = "";
}



}
function onchan2()
{
    let x = document.getElementById("pass1").value;
console.log(x);
let y = document.getElementById("pass2").value;
    if (x !== y )
{
    txtmsg[1].innerHTML = "The two passwords dont match";

}
if (x === y)
{
    document.getElementById("btn").style.display = "block";
    txtmsg[1].innerHTML = "";
}

}
