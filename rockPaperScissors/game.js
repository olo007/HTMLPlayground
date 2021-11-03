let drawsCounter =0;
let userWinsCounter=0;
let computerWinsCounter=0;
function play(userSign){
    let mySign=Math.floor(Math.random()*3);
    switch(mySign){
        case 1:
            if(userSign=='rock'){
                draw();
            }else if(userSign=='paper'){
                userWon();
            }else{
                computerWon();
            }
            document.getElementById("computerSign").style.backgroundImage="url(./sources/rock.png)";
            document.getElementById("computerSign").style.backgroundSize="300px 300px";
            break;
        case 2:
            if(userSign=='paper'){
                draw();
            }else if(userSign=='scissors'){
                userWon();
            }else{
                computerWon();
            }
            document.getElementById("computerSign").style.backgroundImage="url(./sources/paper.png)";
            document.getElementById("computerSign").style.backgroundSize="300px 300px";
            break;
        default:
            if(userSign=='scissors'){
                draw();
            }else if(userSign=='rock'){
                userWon();
            }else{
                computerWon();
            }
            document.getElementById("computerSign").style.backgroundImage="url(./sources/scissors.png)";
            document.getElementById("computerSign").style.backgroundSize="300px 300px";
    }
}
function draw(){
    drawsCounter+=1;
    document.getElementById("message").innerHTML="Draw";
    document.getElementById("message").style.color="blue";
}
function userWon(){
    userWinsCounter+=1;
    document.getElementById("message").innerHTML="You won";
    document.getElementById("message").style.color="green";
    document.getElementById("showUserWins").innerHTML=userWinsCounter;
}
function computerWon(){
    computerWinsCounter+=1;
    document.getElementById("message").innerHTML="Computer won";
    document.getElementById("message").style.color="red";
    document.getElementById("showComputerWins").innerHTML=computerWinsCounter;    
}