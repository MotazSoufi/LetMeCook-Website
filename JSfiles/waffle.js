var milk;
var sugar;
var blueberries;
var flour;
var bPowder;
var salt;
var eggs;
var butter;
var vanilla;
function myfunction(){
    var button1 = document.getElementById("add");
    var button2 = document.getElementById("subtract");

    button1.addEventListener("click",addition,false);
    button2.addEventListener("click",subtraction,false);
    
    milk = document.getElementById("milk");
    sugar = document.getElementById("sugar");
    blueberries = document.getElementById("blueberries");
    flour = document.getElementById("flour");
    bPowder = document.getElementById("bPowder");
    eggs = document.getElementById("eggs");
    butter = document.getElementById("butter");
    vanilla = document.getElementById("vanilla");
    salt = document.getElementById("salt");
    serving = document.getElementById("serving");
}

function addition(){
    flour.innerHTML = parseInt(flour.innerHTML) + 2;
    sugar.innerHTML = parseInt(sugar.innerHTML) + 2;
    bPowder.innerHTML = parseInt(bPowder.innerHTML) + 1;
    salt.innerHTML = parseFloat(salt.innerHTML) + 0.25;
    milk.innerHTML = parseInt(milk.innerHTML) + 2;
    eggs.innerHTML = parseInt(eggs.innerHTML) + 2;
    butter.innerHTML = parseFloat(butter.innerHTML) + 0.5;
    vanilla.innerHTML = parseInt(vanilla.innerHTML) + 1;
    blueberries.innerHTML = parseInt(blueberries.innerHTML) + 1;
    serving.innerHTML = parseInt(serving.innerHTML) + 1;
}

function subtraction(){
    if(parseInt(serving.innerHTML) > 1){
        flour.innerHTML = parseInt(flour.innerHTML) - 2;
        sugar.innerHTML = parseInt(sugar.innerHTML) - 2;
        bPowder.innerHTML = parseInt(bPowder.innerHTML) - 1;
        salt.innerHTML = parseFloat(salt.innerHTML) - 0.25;
        milk.innerHTML = parseInt(milk.innerHTML) - 2;
        eggs.innerHTML = parseInt(eggs.innerHTML) - 2;
        butter.innerHTML = parseFloat(butter.innerHTML) - 0.5;
        vanilla.innerHTML = parseInt(vanilla.innerHTML) - 1;
        blueberries.innerHTML = parseInt(blueberries.innerHTML) - 1;
        serving.innerHTML = parseInt(serving.innerHTML) - 1;
    }
}

window.addEventListener("load",myfunction,false);