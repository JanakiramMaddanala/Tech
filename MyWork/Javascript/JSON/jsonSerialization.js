var person = {
    id: 1,
    name: '',
    salary: 10000,
    designation: '',
    city: undefined,
    state: null,
    skills: ['C#', 'Javascript', 'React'],
    getSalary: function () {
        return this.salary;
    },
    toJSON: function() {
        return {
            id: this.id,
            name: this.name,
            salary: this.salary,
            designation: this.designation,
        }
    }
}

var json = JSON.stringify(person, function (key, value) {
    console.log(`key: ${key}; value: ${value}`);
    if(key === 'skills') {
        return value.join(',');
    } else {
        return value;
    }
}, 4);
console.log(json);

var person = JSON.parse(json, function(key, value) {
    console.log(key,value);
    return key === 'name' ? '' + value : value;    
})
console.log(person);

// person = JSON.parse(json);
// console.log(person);

// var json = JSON.stringify(person, null, 4);
// console.log(json);

// var json = JSON.stringify(person, null, "-".repeat(14));
// console.log(json);

// var json = JSON.stringify(person, null, "\t");
// console.log(json);
