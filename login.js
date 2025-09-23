
class User{
    constructor(name,pass){
        this.name = name;
        this.pass = pass;
    }
}


let submit = document.getElementById("loginbutton");
let register = document.getElementById("register");
let name = document.getElementById("nameText").value;
let pass = document.getElementById("passText").value;
let users = [];

submit.addEventListener("click", tryLogin);

function tryLogin(){
    let found = false;
    for(let i = 0; i < users.length; i++){
        found = checkUser(users[i], name, pass);
        if (found) {
            console.log("Has iniciado sesion!");
            window.location.href = "index.html";
            break;
        }
    }
    if (!found){
        window.alert("pendejo pone mal el usuario");
        document.getElementById("nameText").value = '';
        document.getElementById("passText").value = '';
    }
}
function checkUser(user, name, pass){
    let found = false;
    if (user.name === name && user.pass === pass){
        found = true;
    }
    return found;
}
register.addEventListener("click", addUser);

function addUser(){
    window.location.href = "register.html";
}
