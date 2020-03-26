let user = {
    name: "Janakiram",
    age: "Janakiram",
    smile: function(){
        return "smiling....";
    }

    // toJSON(){
    //     return this.name + this.age
    // }
};

console.log(JSON.stringify(function(){})); 
console.log(JSON.stringify(undefined));

// console.log(user.toJSON());
console.log(JSON.stringify(user,null,'  <json>  '));
// console.log(JSON.stringify(user, function(key, value){
//     console.log(key);
//     console.log(value);
//     console.log(this);
//     if(key == ''){
//         return value;
//     }

//     if(key == 'name'){
//         console.log(key);
//         console.log(value);
//         return value + 123;
//     }

//     return value + 143;
// }, 'ram'));


let jsonParsedInput = JSON.parse('[1,2,3,4]');
console.log(jsonParsedInput);


user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
jsonParsedInput = JSON.parse(user);
console.log(jsonParsedInput.age);

