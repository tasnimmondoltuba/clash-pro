// function play (){
//     //step-1: hide the home screen.to hide the screen add the class hidden to the home section.

//     const homeScreen = document.getElementById('home-screen'); 
    
//     // console.log(homeScreen);
//     homeScreen.classList.add('hidden');

//     // show the playground
//     const playGroundScreen = document.getElementById('play-ground-screen');
//     playGroundScreen.classList.remove('hidden');
// }

// key press
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log("player pressed",playerPressed);
    // stope the game if pressed 'esc
    if(playerPressed === 'Escaped'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('random-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
 
    // console.log(playerPressed,expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you gote a point');
        console.log('you have pressed correctly', expectedAlphabet);
        // update score:
        // 1.get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScoreText);

        // 2. incress score by 1
        const newScore = currentScore + 1;
       
        // 3. show the updated score
    
        currentScoreElement.innerText = newScore;
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life.')
        // step-1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife =parseInt(currentLifeText);

        // step-2: reduce the life count
        const newLife = currentLife -1;
        // step-3: display the updated life count
        currentLifeElement.innerText = newLife;


        if(newLife === 0){
            console.log('game over');
            gameOver();
        }
    }
}
// capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress);
// gound ar play
function continueGame(){
    // step-1:genarete random alphabet
    const alphabet = getARanmdomAlphabet();

    // set randomly genarated alphabet to the screen (show it)
    const currentAlphabetElemnt =document.getElementById('random-alphabet');
    currentAlphabetElemnt.innerText = alphabet;

    // set background color
    setBackGroundColorById(alphabet);

}

function play(){
    // hide everything show only play ground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground-screen');
    continueGame();

    // reset score and life
    // setTextElementValueById('current-life', 5);
   
    setTextElementValueById('current-score', 0);
}


function gameOver(){
    hideElementById('play-ground-screen');
    showElementById('final-score');

    // update final score
    // 1. get the final score
    const gameScore =document.getElementById('current-score');
    setTextElementValueById('game-score', gameScore);
    // clear the last highlite alphabet
const currentAlphabet =getElementTextById('random-alphabet');
console.log('random-alphabet');
removeBackgroundColorById(currentAlphabet);
}

// function playAgain (){
//     hideElementById('final-score');
//     showElementById('home-screen');
// }

