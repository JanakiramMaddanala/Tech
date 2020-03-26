class User{
    constructor(){
        this._name = "";
    }

    get Name(){
        return this._name;
    }

    set Name(value){
        if(value){
            this._name = value;
        }
    }
}


let user = new User();
user.Name = "";
console.log(user.Name);
console.log(User.prototype);