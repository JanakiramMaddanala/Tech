var person = {
    id: 1,
    name: '',
    _age: 26,
}

Object.defineProperties(person, {
    designation: {
        value: '',
        enumerable: true,
    },
    salary: {
        get: function() {
            return this._age;
        },
        set: function(newAge) {
            return this._age = newAge;
        },
        enumerable: true,
    }
})

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const element = person[key];
        console.log(key, ':', element);
        
    }
}