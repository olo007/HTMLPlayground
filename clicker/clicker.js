let numberOfClicks=0;
/*const colorsOfClicker={
    10:"#FF0000",
    20:"#AA5500",
    30:"#55AA00",
    40:"#00FF00",
    50:"#00AA55",
    60:"#0055AA",
    70:"#0000FF",
    80:"#5500AA",
    90:"#AA0055",
} */
const colorsOfClicker=["#FF0000","#AA5500","#55AA00","#00FF00","#00AA55","#0055AA","#0000FF","#5500AA","#AA0055"];

currentColorKey=0
function showMessage(){
    numberOfClicks+=1;
    document.getElementById("counterID").innerHTML=numberOfClicks;
    document.getElementById("counterID").style.color = colorsOfClicker[currentColorKey];
    if(currentColorKey>=colorsOfClicker.length-1){
        currentColorKey=0;
    }else{
        currentColorKey+=1;
    }
}