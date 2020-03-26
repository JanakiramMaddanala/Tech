let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },

    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "redbud": {},
            "magnolia": {}
        }
    }
};

function createTree(objData, parent){
    for (const key in objData) {
        parent = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = key;

        if(parent.tagname === 'li'){
            let ul = document.createElement('ul');
            ul.append(li);
            parent.append(ul);
        }
        else{
            parent.append(li);
        }

        console.log(parent);
        createTree(objData[key], parent)
    }

    return parent;
}

let parent = createTree(data);


document.body.appendChild(parent);