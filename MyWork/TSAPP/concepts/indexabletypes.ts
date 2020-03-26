// interface Menu{
//     [index: number] : any;
//     [name: string] : any;
// }


// let menu1: Menu = [{first:{a:1,b:2,c:"ram"}}, {second:{a:1,b:2,c:"ram"}}];

// console.log(menu1[0]);
// console.log(menu1["first"].a);
// console.log(menu1["second"].b)

interface NewMenu {
    [index: number]: string;
    [name: string]: string
    itemDescription: string;
}

let menu: NewMenu = { itemId: "1", itemDescription: "xyz", 1: "", 2: "", }

console.log(menu.itemId);

console.log(menu.itemDescription);

console.log(menu[1]);
console.log(menu[2])
console.log(menu["itemId"]);


