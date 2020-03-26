// interface Menu{
//     [index: number] : any;
//     [name: string] : any;
// }
var menu = { itemId: "1", itemDescription: "xyz", 1: "", 2: "" };
console.log(menu.itemId);
console.log(menu.itemDescription);
console.log(menu[1]);
console.log(menu[2]);
console.log(menu["itemId"]);
