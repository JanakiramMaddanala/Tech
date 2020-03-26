
let div = document.createElement('table');
div.innerHTML = `<tr>
                    <td>Name</td>
                    <td>age</td>
                </tr>`;
div.style.borderColor = "green";
div.style.border = "1";
div.style.background = "red";

document.body.appendChild(div);

let anotherDiv = div.cloneNode(true);
let td = anotherDiv.querySelector('td');
td.innerHTML = "name";
div.after(anotherDiv);

// document.body.removeChild(div);

let textNode = document.createTextNode("Hi, I am just text node.");
document.body.insertBefore(textNode, div);

let text = "<p>Hi</p>";
anotherDiv.innerHTML = text;
div.textContent = text;
anotherDiv.appendChild(textNode);

let olElement = document.getElementById("ol");
olElement.innerHTML = "";

let ulElement = document.createElement('ul');
while (true) {
    let userInput = prompt("Enter Item");
    if (!userInput) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = userInput;
    ulElement.append(li);
}

document.body.appendChild(ulElement);
// let liElement = document.createElement('li');
// liElement.textContent = "0";

// // console.log(olElement.children[0]);
// olElement.insertBefore(liElement, olElement.children[0])

// olElement.insertAdjacentElement('afterbegin', liElement);
// olElement.append(liElement);
// olElement.prepend(liElement);
// olElement.replaceChild(liElement, olElement.children[1])
// olElement.before(liElement);
// olElement.after(liElement);
// olElement.replaceWith(liElement);
// olElement.before(textNode);


// console.log(document.body.outerHTML);

// setTimeout(() => document.write("Oops...."), 1000);

