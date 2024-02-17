// function play (){
//     //step-1: hide the home screen.to hide the screen add the class hidden to the home section.

//     const homeScreen = document.getElementById('home-screen'); 
    
//     // console.log(homeScreen);
//     homeScreen.classList.add('hidden');

//     // show the playground
//     const playGroundScreen = document.getElementById('play-ground-screen');
//     playGroundScreen.classList.remove('hidden');
// }


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
    hideElementById('home-screen');
    showElementById('play-ground-screen');
    continueGame();
}


