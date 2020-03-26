let obj = {
    id: 1,
    name: '',
    designation: '',
}

let { id:identifier, name:fullname, designation:occupation } = obj;

console.log(identifier, fullname, occupation);