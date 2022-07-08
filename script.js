const container=document.querySelector('.container');
const containerStart=document.querySelector('.container-start');
const startBtn=document.querySelector('.start');
const userInput=document.querySelector('.username');

const choices=document.querySelectorAll('.choice');

const userChoice=document.querySelector('.user-choice');
const computerChoice=document.querySelector('.computer-choice');

const computerScore=document.querySelector('.computer-score');
const userScore=document.querySelector('.user-score');

const winnerText=document.querySelector('.winner');
const finalWinnerText=document.querySelector('.winner-text');
const playAgain=document.querySelector('.again');

let player=0;
let computer=0;

 startBtn.addEventListener('click',function(){

    if(userInput.value==''){
        document.querySelector('.error-text').textContent="Introduceti numele!";
        userInput.classList.add('error');
        
    }

    else{

    

    container.classList.add('hidden');
    containerStart.classList.remove('hidden');

    }
})


function resetGame(){
    player=0;
    computer=0;
    finalWinnerText.classList.add('hidden');
    computerScore.textContent="0";
    userScore.textContent="0";
    playAgain.classList.add('hidden');
}

playAgain.addEventListener('click',function(){
    resetGame();
})


function random(){
    let randomChoice=Math.floor(Math.random() * 3) + 1;

    switch (randomChoice) {
        case 1:
            computerChoice.textContent="Piatra";
            break;
         
            case 2:
                computerChoice.textContent="Hartie";
                break;    
        
                case 3:
                    computerChoice.textContent="Foarfeca";
                    break;

        default:
            break;
    }
}

choices.forEach(choice => choice.addEventListener('click',function(){
        userChoice.textContent=choice.value;
        random();
        checkWinner();
        computerScore.textContent=computer;
        userScore.textContent=player;
}))


function checkWinner(){
    if(userChoice.textContent==computerChoice.textContent){
        player=player;
        computer=computer;
    }

    else if(userChoice.textContent=="Piatra"){
        if(computerChoice.textContent=="Foarfeca")
            player++;
            else
            computer++;
    }
    else if(userChoice.textContent=="Foarfeca"){
        if(computerChoice.textContent=="Hartie")
        player++;
            else
            computer++;
    }
    else if(userChoice.textContent=="Hartie"){
        if(computerChoice.textContent=="Piatra")
        player++;
            else
            computer++;
    }


    if(player==5||computer==5){
        if(player==5){
            finalWinnerText.classList.remove('hidden');
            finalWinnerText.textContent=`Felicitari, ${userInput.value}, ai castigat!🎉`;
        }

        else if( computer==5){
            finalWinnerText.classList.remove('hidden');
            finalWinnerText.textContent="Ai fost invins 😥";
        }

         playAgain.classList.remove('hidden');
    }

    
}

