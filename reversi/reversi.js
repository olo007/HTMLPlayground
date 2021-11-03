var tds=document.querySelectorAll("td");
 
document.addEventListener("click",event=>{
    var x=event.clientX;
    var y=event.clientY;
    alert(x+" "+y);
    var dot = document.createElement("div");
    dot.setAttribute("class","black-tile");
    //element=event.target;
    event.target.appendChild(dot);

    //tds[0].appendChild(dot);
});