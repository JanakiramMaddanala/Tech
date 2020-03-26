const fetch = require("node-fetch");

// async function FetchAsync(){
//     let url = "https://www.programiz.com/dsa/linked-list-types";

//     let response = await fetch(url);

//     if (response.ok) {
//       console.log(await response.text());
//     } else {
//       console.log(response.status);
//     }

//     fetch(url)
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((reason) => {
//         console.log(reason);
//     });
// }

// FetchAsync();


async function FetchAsync(){
    fetch("https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj69ci_ouHiAhWWbysKHYITCbMQjRx6BAgBEAU&url=https%3A%2F%2Fdevelopers.redhat.com%2Fblog%2F2018%2F12%2F13%2Fbuilding-net-core-container-images-using-s2i%2F&psig=AOvVaw0kCC8tT_fWEpFaQ6LpDnIm&ust=1560337018537662")
    .then((response) => {
        // let value = await response.blob();
        // throw new Error("Intentional");
        return response;
    })
    .catch((reason) => {
        console.log(reason);
    })
    .then(async (response) => {
        let reader = response.body.getReader();
        while(true){
           cosnt {done, value} = await reader.Read();
        }
    })
}

FetchAsync();