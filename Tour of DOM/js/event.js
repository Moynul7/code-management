
//option 2 onclick function
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = 'red';
}

//option 3 onclick function

const makeBlueBtn = document.getElementById('blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//option 3 another onclick function

const makePurpleBtn = document.getElementById('purple');
makePurpleBtn.onclick = function(){
    document.body.style.backgroundColor = 'purple';
}


//option 4 

const makeButtonPink = document.getElementById('pink');
// makeButtonPink.addEventListener('click', makePink);
// function makePink(){
//     document.body.style.backgroundColor = 'pink';
// };

// option 4 another

makeButtonPink.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = 'pink';
});

// option 5

document.getElementById('Orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
})


//handler function

function eventHandler() {
    const handlerStatus = document.getElementById('Handler-Status');
    handlerStatus.innerText = "`I'm` Working Properly";
}
// Listener Function
const changeListner = document.getElementById('change-listner');
changeListner.addEventListener('click', function(){
    const listnerStatus = document.getElementById('Listner-Status');
    listnerStatus.innerText = 'Text change by Lister Function';
})

const updatedButton = document.getElementById('updated');
updatedButton.addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    
    const displayText = document.getElementById('input-text-display');
    displayText.innerText = inputText;
    inputField.value = '';
})