let playerOnTurn = "X";
let roundNumber=0;
let table = ["", "", "", "", "", "", "", "", ""];
let gameActive=true;

const winningCompositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function cellClick(cellId){
    if(table[cellId]!=="" || !gameActive){
        return;
    }else{
        table[cellId]=playerOnTurn;
        document.getElementById(cellId).innerHTML=playerOnTurn;
        checkResult();
        if(gameActive) {changePlayer();}
    }
}
function checkResult(){
    roundNumber+=1;
    if(roundNumber>=3){
        for(let i=0;i<winningCompositions.length;i++){
            if(table[winningCompositions[i][0]]==playerOnTurn 
                && table[winningCompositions[i][1]]==playerOnTurn 
                && table[winningCompositions[i][2]]==playerOnTurn){
                    win(playerOnTurn);
            }
        }
        if(roundNumber==9){
            draw();
        }
    }
}
function changePlayer(){
    playerOnTurn = playerOnTurn === "X" ? "O":"X";
    document.getElementById("messageDisplayer").innerHTML="It's "+playerOnTurn+" turn";
}
function win(player){
    document.getElementById("messageDisplayer").innerHTML=playerOnTurn+" won";
    gameActive=false;
}
function draw(){
    document.getElementById("messageDisplayer").innerHTML="Draw";
    gameActive=false;
}
function restartGame(){
    playerOnTurn = "X";
    roundNumber=0;
    table = ["", "", "", "", "", "", "", "", ""];
    for(let i=0;i<9;i++){
        document.getElementById(i).innerHTML="";
    }
    document.getElementById("messageDisplayer").innerHTML="It's "+playerOnTurn+" turn";
    gameActive=true;
}