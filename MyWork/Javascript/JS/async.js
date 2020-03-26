async function loadData(){
    let result = await Promise.resolve(1);
    return result;
}

console.log(loadData());

let user = {};
Object.freeze()