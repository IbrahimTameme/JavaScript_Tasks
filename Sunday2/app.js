`use strict`;
let foorm = document.getElementById("mobForm");
let tablebody = document.getElementById("bodyTa");
let salesarr = [];




function storeinlocalstorage()
{
    let strng = JSON.stringify(salesarr[salesarr.length-1])
    localStorage.setItem( salesarr[salesarr.length-1].name ,strng )
}

function fromlocalstoarge ()
{
    let keyy = salesarr[salesarr.length-1].name ;
    let localstoargeitem = localStorage.getItem(keyy);
    /// i have to check if toobject is emepty and if false enter the data into the array
    let toobject = JSON.parse(localstoargeitem);
    if(toobject !== null)
    {
        salesarr = toobject;
    }
  

    // 
    return toobject;
}



function isitnew(x)
{
    if (x>=100)
    return "new";
    else
    return "used";
}

function salesconstr(name , ptype ,price, isnew)
{
    this.name = name ; 
    this.ptype = ptype;
    this.price = price ;
    this.isnew = isnew;
    salesarr.push(this);
    storeinlocalstorage()
    showdataontble()
    // console.log(salesarr);
}

foorm.addEventListener("submit", getdatafrominput)
function getdatafrominput(event)
{
    event.preventDefault();
    
 let name = event.target.useName.value; 
 let ptype = event.target.typeNameD.value;
 let price = Math.ceil(Math.random() * (200 - 50) + 50);
    let isnew = isitnew(price);
 
 new salesconstr(name,ptype,price,isnew)


//  console.log(name );
//  console.log(ptype);
//  console.log(price);
//  console.log(isnew);

 
}
getdatafrominput();


function showdataontble()
{
    let  getfromlocalstoarge = fromlocalstoarge();
    console.log(getfromlocalstoarge);


    let tablerow = document.createElement("tr");
    tablebody.appendChild(tablerow);

    let tabledt1 = document.createElement("td");
    tabledt1.innerText = getfromlocalstoarge.name;
    console.log(tabledt1);
    let tabledt2 = document.createElement("td");
    tabledt2.innerText = getfromlocalstoarge.ptype;
    
    let tabledt3 = document.createElement("td");
    tabledt3.innerText = getfromlocalstoarge.price;
   
    let tabledt4 = document.createElement("td");
    tabledt4.innerText = getfromlocalstoarge.isnew;
    tablerow.append(tabledt1,tabledt2,tabledt3,tabledt4)
    
    
    
}