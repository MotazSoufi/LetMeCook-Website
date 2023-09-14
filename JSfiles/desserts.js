var totalCalories = 0;
function add(){
    var recipeName = document.getElementById("recipeName").value;
    var day = document.getElementById("day").value;
    var meal = document.getElementById("meal").value;

    switch(day){
    case "Monday":
        var column = 1;
    break;

    case "Tuesday":
        var column = 2;
    break;

    case "Wednesday":
        var column = 3;
    break;

    case "Thursday":
        var column = 4;
    break;

    case "Friday":
        var column = 5;
    break;

    case "Saturday":
        var column = 6;
    break;

    case "Sunday":
        var column = 7;
    break;
    }

    switch(meal){
    case "Breakfast":
        var row = 1;
    break;

    case "Lunch":
        var row = 2;
    break;

    case "Dinner":
        var row = 3;
    break;
    }

    // contactination of both values
    var cell = row + "" + column;

    //check if cell is empty (without it, we can keep adding calories to the same cell)
    if(document.getElementById(cell).innerHTML == ""){

    switch(recipeName){
    case "Raspberry Chocolate Cheesecake":
        totalCalories += 210;
    break;

    case "Blueberry Waffles":
        totalCalories += 180;
    break;

    case "Tiramisu":
        totalCalories += 550;
    break;

    case "Peanut Butter Oatmeal":
        totalCalories += 280;
    break;

    case "Vanilla Cupcakes":
        totalCalories += 262;
    break;

    case "Lemon Tart":
        totalCalories += 122;
    break;

    case "Banana Pancake":
        totalCalories += 124;
    break;

    case "Blueberry Macarons":
        totalCalories += 340;
    break;

    }
    // put the recipe name in the cell location
    document.getElementById(cell).innerHTML = recipeName;
    }

    // update the calories value
    document.getElementById("calories").innerHTML = totalCalories;
}

function remove(num){

    // read the text inside the cell location
    var recipeText = document.getElementById(num).innerHTML;

    // check for the recipe to remove the correct amount of calories
    switch(recipeText){
    case "Raspberry Chocolate Cheesecake":
        totalCalories -= 210;
    break;

    case "Blueberry Waffles":
        totalCalories -= 180;
    break;

    case "Tiramisu":
        totalCalories -= 550;
    break;

    case "Peanut Butter Oatmeal":
        totalCalories -= 280;
    break;

    case "Vanilla Cupcakes":
        totalCalories -= 262;
    break;

    case "Lemon Tart":
        totalCalories -= 122;
    break;

    case "Banana Pancake":
        totalCalories -= 124;
    break;

    case "Blueberry Macarons":
        totalCalories -= 340;
    break;
    }

    // make the cell empty
    document.getElementById(num).innerHTML = "";

    // update calorie value
    document.getElementById("calories").innerHTML = totalCalories;
}