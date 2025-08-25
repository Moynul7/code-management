//

const listContainer = document.getElementById('list-container');
const items = document.getElementsByClassName('item');
// for(const item of items){
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target);
        
//     })
// }

listContainer.addEventListener('click', function(e){
    e.target.parentNode.removeChild(e.target);
})

const addItem = document.getElementById('id-item');

addItem.addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = 'New Brand Item';
    li.classList.add('item');
    listContainer.appendChild(li);
});