import { v4 as uuidv4 } from "uuid";

class User {
    constructor(name, surname, email, tel, pswrd)
    {
        this.id = uuidv4();
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.tel = tel;
        this.pswrd = pswrd;
    }
}

class UsersControl {
    constructor()
    {
        let users = localStorage.getItem("users");
        if(users === null)
        {
            this.users = [];
        }
        else { this.users = users; }
    }
    findByParam(param, value) {
        const user = this.users.filter((user) => user[param] === value);
        return user[0];
    }
    AddUser(name, surname, email, tel, pswrd)
    {
        const user = new User(name, surname, email, tel, pswrd);
        this.users.filter
    }

}