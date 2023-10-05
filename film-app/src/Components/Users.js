class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
class Users{
    listOfUsers = [];

    constructor(){
        this.listOfUsers = [];
    }

    findUser(email){
        for(let i = 0; i < this.listOfUsers.length; i++){
            if(this.listOfUsers[i].email === email){
                return this.listOfUsers[i];
            }
        }
        return null;
    }
    
    addUser(user){
        this.listOfUsers.push(user);
    }


}



export {User,Users};