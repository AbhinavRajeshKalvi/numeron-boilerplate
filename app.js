// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

let play_Btn = document.getElementById("play-button");
console.log(play_Btn)

play_Btn.addEventListener("click", redirect)

function redirect(){
    location.href = "./game.html"
};
