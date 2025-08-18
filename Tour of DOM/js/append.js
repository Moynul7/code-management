
const sectionContainer = document.getElementById('section-container');
const heading = document.createElement('h2');
heading.innerText = 'I Love My Country';
sectionContainer.append(heading);


const placesList = document.getElementById('places-list');
const li2 = document.createElement('li');
li2.innerText = 'Pahartoli';
sectionContainer.appendChild(li2);



// Create dynamic section and added elements

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const list1 = document.createElement('li');
list1.innerText = 'Biriyani';
ul.appendChild(list1);

const list2 = document.createElement('li');
list2.innerText = 'Borhani';
ul.appendChild(list2);

const list3 = document.createElement('li');
list3.innerText = 'Tehari';
ul.appendChild(list3);


section.appendChild(ul);
mainContainer.appendChild(section);

// step 2

const dressSection = document.createElement('section');
dressSection.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-Shirt</li>
    <li>Longi</li>
    <li>Sando Genji</li>
</ul>
`
mainContainer.appendChild(dressSection);
