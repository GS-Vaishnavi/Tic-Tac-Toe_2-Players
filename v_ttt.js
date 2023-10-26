let currentplayer="X"
function x(val)
{
    if(!val.innerHTML){
        val.innerHTML=currentplayer;
        currentplayer=(currentplayer==="X")?"O":"X";
    }
    win();
}
function reset(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(function(vals) {
        vals.innerHTML = "";
        currentplayer="X";
    });
}


function win(){
    let cell1=document.querySelector(".cell1").innerHTML;
    let cell2=document.querySelector(".cell2").innerHTML;
    let cell3=document.querySelector(".cell3").innerHTML;
    let cell4=document.querySelector(".cell4").innerHTML;
    let cell5=document.querySelector(".cell5").innerHTML;
    let cell6=document.querySelector(".cell6").innerHTML;
    let cell7=document.querySelector(".cell7").innerHTML;
    let cell8=document.querySelector(".cell8").innerHTML;
    let cell9=document.querySelector(".cell9").innerHTML;

    if(
        (cell1=="X"&&cell2=="X"&&cell3=="X")
    ||  (cell4=="X"&&cell5=="X"&&cell6=="X")
    ||  (cell7=="X"&&cell8=="X"&&cell9=="X")
    ||  (cell1=="X"&&cell5=="X"&&cell9=="X")
    ||  (cell3=="X"&&cell5=="X"&&cell7=="X")
    ||  (cell1=="X"&&cell4=="X"&&cell7=="X")
    ||  (cell2=="X"&&cell5=="X"&&cell8=="X")
    ||  (cell3=="X"&&cell6=="X"&&cell9=="X")
    )
    {
        
        setTimeout(function() {
            alert("X wins");
            reset();
          }, 100);
    }

    if(
        (cell1=="O"&&cell2=="O"&&cell3=="O")
    ||  (cell4=="O"&&cell5=="O"&&cell6=="O")
    ||  (cell7=="O"&&cell8=="O"&&cell9=="O")
    ||  (cell1=="O"&&cell5=="O"&&cell9=="O")
    ||  (cell3=="O"&&cell5=="O"&&cell7=="O")
    ||  (cell1=="O"&&cell4=="O"&&cell7=="O")
    ||  (cell2=="O"&&cell5=="O"&&cell8=="O")
    ||  (cell3=="O"&&cell6=="O"&&cell9=="O")
    )
    {
        
        setTimeout(function() {
            alert("O wins");
            reset();
          }, 100);
    }
}