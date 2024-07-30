function SetUserName(username) {
    // complex db call
    this.username = username
}

function createUser(username, email, password) {
    SetUserName.call(this, username); // ekhane this diye dawya mane SerUserName er moddhe createUser er scope ta kaj korbe, tai call use korte holo.
    this.email = email;
    this.password = password;
}

const person = new createUser("rahat", "rahat@gmail.com", 123456);
console.log(person);