var r1;
function myfunction(){
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");

    button1.addEventListener("click",roll1,false);
    button2.addEventListener("click",roll2,false);
    r1 = document.getElementById("recipe1"); 
}

function roll1(){
    setImage1(r1);
}

function roll2(){
    setImage2(r1);
}

function setImage1(img){
    var val1 = Math.floor(1+Math.random()*4);
    img.setAttribute("src","Images/food" + val1 + ".png");
}

function setImage2(img){
    var val2 = Math.floor(1+Math.random()*4);
    img.setAttribute("src","Images/drink" + val2 + ".png");
}
window.addEventListener("load",myfunction,false);