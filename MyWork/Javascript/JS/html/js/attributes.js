// Using getElementsByName
let namedElements = document.getElementsByName("myname");

for (const namedElement of namedElements) {
    console.log(`Inner HTML : ${namedElement.innerHTML}`);
    console.log(`Text Content : ${namedElement.textContent}`);
    console.log(`Outer HTML : ${namedElement.outerHTML}`);
}

// getAttribute
let h1HeadingName = document.querySelector('h1').getAttribute('Header-name');
console.log(`Before attribute removal: ${h1HeadingName}`);

// removeAttribute
h1HeadingName = document.querySelector('h1').removeAttribute('header-name');
console.log(`After attribute removal: ${h1HeadingName}`);

// setAttribute
h1HeadingName = document.querySelector('h1').setAttribute('header-name', "New Heading 1");
h1HeadingName = document.querySelector('h1').getAttribute('header-name');
console.log(`Set attribute again: ${h1HeadingName}`)


console.log(...document.documentElement.attributes);

console.log(document.body.style);
console.log(document.body.getAttribute("style"));

let user = {
    name: "Janakiram Maddanala",
    age: 25,
}

let userInfoDivTags = document.querySelectorAll("div[user-info]");

for (const userInfoDivTag of userInfoDivTags) {
    let userInfoAttribute = userInfoDivTag.getAttribute("user-info");
    userInfoDivTag.innerHTML = `${userInfoAttribute} : ${user[userInfoAttribute]}`;
}

console.log(document.body.dataset); 

let h1Element = document.querySelector("[data-h1-value]");

console.log(h1Element.dataset.h1Value);
// console.log([].join.apply(numbers));
/*
HTML attribtes 
1. are case-insensitive
2. values are strings

We use data-* attributes to avoid conflicts with standard HTML attributes. data-* attributes are reserved for programmers.
*/