const keys = {};
const addButton = document.querySelector("#btnAdd");
addButton.addEventListener('click', AddName);

const items = document.createElement('div');
items.setAttribute('id', 'items');

const ul = document.createElement('ul');

function AddName(e) {
    e.preventDefault();
    const inputName = document.querySelector("#name");

    localStorage.setItem(inputName.name, inputName.value);

    const li = document.createElement('li');
    li.textContent = localStorage.getItem(inputName.name);

    ul.appendChild(li);
    items.appendChild(ul)
    document.body.appendChild(items);    
}

