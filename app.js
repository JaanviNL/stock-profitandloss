var initialp =document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentp = document.querySelector("#current-price");

var button = document.querySelector(".submit");
var message = document.querySelector(".message");

var change = document.querySelector(".container");

function  check()
{
    var initial = initialp.value;
    var current = currentp.value;
    var net = quantity.value;
    calculateProfitandLoss(initial,net,current)
  
}

function calculateProfitandLoss(initialPrice , amount , currentPrice)
{
    
    
if(initialPrice  >= currentPrice)
{

    var loss = (initialPrice - currentPrice) * amount;
    var losspercent = ((initialPrice - currentPrice)/initialPrice)*100;
    message.innerHTML="Oops, you're making a loss of <span class='trial1'>₹"  + loss +  "</span>, "  + "Loss Percentage: <span class='trial1'>" + losspercent.toFixed(2) + "% </span>"; 
    change.setAttribute("style", "background-color:red;","color:white;");
    
}
else{

    var profit =(currentPrice -initialPrice)* amount;
    var profitpercentage = ((currentPrice -initialPrice)/initialPrice)*100;
    message.innerHTML="Woohoo! you're making a profit of <span class='trial'>₹" + profit+ "</span>, " + "Profit Percentage: <span class='trial'>" + profitpercentage.toFixed(2) + "%</span>"
    change.setAttribute("style", "background-color:green;");
    
}
}

button.addEventListener("click", check);

