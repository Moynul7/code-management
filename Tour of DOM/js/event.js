
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


const makePurpleBtn = document.getElementById('purple');
makePurpleBtn.onclick = function(){
    document.body.style.backgroundColor = 'purple';
}

