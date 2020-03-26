let options = {
    title: "Nov-Veg Menu",
    items: ["Chicken", "Mutton"]
};

function showOptions({title = "Cool Menu", items:[item1, item2], name = "Ram"}){
    console.log(title);
    console.log(item1);
    console.log(item2);
    console.log(name);
}

showOptions(options);