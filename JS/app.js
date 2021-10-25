let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector (".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* funcion para obtener una decision de la compu */
function getComputerChoice () {
    const choices = ['r','p','s'];
    const randomNumber= Math.floor(Math.random()*3);
    return choices [randomNumber];
}

/* funcion para convertir las siglas a letras */

function convertToWord(letter){
    if (letter == "r") return "Piedra";
    if (letter == "p") return "Papel";
    if (letter == "s") return "Tijeras";
} 

/* funciones para cuando se gane, pierda o empate en la partida */

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord( userChoice)}  le gana a ${convertToWord( computerChoice)} , tu ganas!"`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout (function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}


function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord( userChoice)}  pierde contra ${convertToWord( computerChoice)} , computadora gana!"`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout (function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord( userChoice)}  empata con ${convertToWord( computerChoice)}`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout (function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}


/* funcion de comparar el juego */
function game (userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }     
}


/* funcion para seleccionar piedra papel o tijera dando click (usuario) */

function main (){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();
