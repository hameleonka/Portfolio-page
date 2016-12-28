var speechBubble = document.querySelector('.speech-bubble');
var textSpeechBubble = speechBubble.innerHTML;
console.log(textSpeechBubble);
var textSpeechBubbleArray = textSpeechBubble.split('');
console.log(textSpeechBubbleArray);

var speechBubbleInnerHTML= '';

function typeALetter(indexOfALetter) {
    if (indexOfALetter <= textSpeechBubbleArray.length -1) {
        speechBubbleInnerHTML = speechBubbleInnerHTML + textSpeechBubbleArray[indexOfALetter];
        console.log(speechBubbleInnerHTML);
        speechBubble.innerHTML = speechBubbleInnerHTML;
        setTimeout(function(){typeALetter(indexOfALetter + 1)}, 70);
    }
}

function startTypeIn() {
    speechBubble.innerHTML = '';
    typeALetter(0);
}

startTypeIn();






