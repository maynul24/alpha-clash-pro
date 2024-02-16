function handleKeyboardKeyUpEvent (event){
    const  playerPressed = event.key;

    if (playerPressed === 'Escape'){
        gameEnd();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
        const currentScore = getTextElementValuById('current-score');
        const newScore = currentScore + 1;
        setTextElementValuById('current-score', newScore);

    }else{
        const currentLife = getTextElementValuById('current-life');
        const newLife = currentLife - 1;
        setTextElementValuById('current-life', newLife);
        if(newLife === 0){
            gameEnd();
        }
    }

    
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    addBackgroundColorById(alphabet);
}

function play(){
    hideElementById("home-screen");
    hideElementById("score");
    showElementById("play-ground");

    setTextElementValuById("current-life",5);
    setTextElementValuById("current-score",0);
    continueGame();
}


function gameEnd(){
    hideElementById("play-ground");
    showElementById("score");
    const lastSCore = getTextElementValuById ("current-score");
    setTextElementValuById("final-score", lastSCore);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

