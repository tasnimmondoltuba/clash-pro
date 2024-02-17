function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

}
function getARanmdomAlphabet(){
    // gst or create an alphabet array
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetsString.split('');
    // get a random index between 0 to 25
    const randomNumber =Math.random() * 25;
    const roundRandomNumber = Math.round(randomNumber);
    const alphabet = alphabets[roundRandomNumber];
    return alphabet;
}