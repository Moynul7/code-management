const liCollection = document.getElementsByTagName('li');
for(const list of liCollection){
    // console.log(list.innerText);
};

const allHeading = document.getElementsByTagName('h1');
for(const h1 of allHeading){
    // console.log(h1.innerText);
};

const name = document.getElementById('name');
name.style.color = 'red';
name.innerText = 'Name change by JS';
name.setAttribute('title', 'Toltip Create by JavaScript');

const nameTitle = document.getElementsByClassName("name-title");
for(const name of nameTitle){
    console.log(name.innerText);
}



const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid red';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '10px';
    section.style.padding = '10px';
    section.style.backgroundColor= 'yellow';
}

// class add

const lastSection = document.getElementById('last');
lastSection.classList.add('bg-green');

// class remove

const removeId = document.getElementById('title2');
removeId.classList.remove('large-font');


// Create Element
const sectioContainer = document.querySelector('#section-container ul');
const li = document.createElement('li');
li.innerText = 'My Name Is Moynul Haque';
sectioContainer.appendChild(li);




