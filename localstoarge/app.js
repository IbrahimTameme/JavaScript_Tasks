'use strict';
let formOrder = document.getElementById("orderForm");
let ulItem = document.getElementById("order");
let banana = [];///1

function settostorage ()
{
    let stringarr = JSON.stringify(banana[banana.length -1])
    localStorage.setItem (banana[banana.length -1].cusName , stringarr)

}
function getfromlocalstorage ()

{
    // console.log(banana[banana.length -1].cusName);
    let a = banana[banana.length -1].cusName ;
    let fromlocal = localStorage.getItem(a);
    // console.log(fromlocal);
    let newarr = JSON.parse(fromlocal)
    // console.log(newarr);
    return newarr
      

}

function Coffee(cusName, cupSize, milkType, isHot, drinkType , price) {
    this.cusName = cusName;
    this.cupSize = cupSize;
    this.milkType = milkType;
    this.isHot = isHot;
    this.drinkType = drinkType;
    this.price = price;

    banana.push(this);
settostorage ()

    renderOrder();
    
    // console.log(banana);
}

formOrder.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target);
    let cusName = event.target.cusName.value;
    // console.log(cusName);

    let cupSize = event.target.cupSize.value;
    // console.log(cupSize);

    let milkType = event.target.milkType.value;
    // console.log(milkType);

    let isHot = event.target.isHot.checked;
    // console.log(isHot);

    let drinkType = event.target.drinkType.value;
    // console.log(drinkType);
    let price = Math.ceil(Math.random() * (15 - 2 ) + 2);
    

    new Coffee(cusName, cupSize, milkType, isHot, drinkType , price);
     
    
   
    // console.log(Tostoarge);
    
     
    // window.localStorage.setItem();

}

handleSubmit();//2

function renderOrder() {

    let hot;
     let b = banana.length -1  ;
     let Tostoarge = banana[banana.length-1];
    
    

    let liElement = document.createElement("li");
    let parElement = document.createElement("p");
    ulItem.appendChild(liElement);
    liElement.appendChild(parElement);
    let fromstoarge = getfromlocalstorage () ;
// console.log(banana[b]);
    if (fromstoarge.isHot === true) {
        hot = "hot"
    } else {
        hot = "cold";
    }

// console.log(nsew);
parElement.textContent = `this customer ${fromstoarge.cusName} he order the following ${fromstoarge.cupSize} with ${fromstoarge.milkType} and he prefare is ${hot} in ${fromstoarge.drinkType} the price is ${fromstoarge.price} `;
    // parElement.textContent = `this customer ${banana[b].cusName} he order the following ${banana[b].cupSize} with ${banana[b].milkType} and he prefare is ${hot} in ${banana[b].drinkType} the price is ${banana[b].price} `;

    
    //  return this.cusName+"has ordered "+this.drinkType
}