
// No- Duplicates/unique formula


function noDuplicate(names) {
    let uniqueName = [];
    for(const name of names){
        if(uniqueName.includes(name) === false){
           uniqueName.push(name);
        }
    }
    return uniqueName;
}

const names = ['Rakib', 'Shakib', 'Makib','Rakib', 'Shakib', 'Makib'];
const unique = noDuplicate(names);
console.log(unique);



///
function noDuplicateNumber(numbers) {
    let uniqueNumber = [];
    for(const number of numbers){
        if (uniqueNumber.includes(number) === false) {
            uniqueNumber.push(number)
        }
    }
    return uniqueNumber;
}

const numbers = [5, 10, 15, 20, 5, 10, 15, 20];
const uniqueNumber = noDuplicateNumber(numbers);
console.log("This is a unique Number =", uniqueNumber);


// Duplicates Remove

function uniqueFriendList(firndes){
    let uniqueName = [];
    for(const firend of firndes){
        if (uniqueName.includes(firend) === false) {
           uniqueName.push(firend);
        }
    }
    console.log(uniqueName);
}

const friendList = ['Rakib', 'Riyad', 'Rezaul', 'Rabbi', 'Ranu','Rakib', 'Riyad', 'Rezaul', 'Rabbi', 'Ranu'];
uniqueFriendList(friendList)



