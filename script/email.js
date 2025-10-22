console.log("assignment 3:");
console.log("Verifying email.id and password");

let email = prompt("Enter your email");

function isValidEmail(email){
    return email.includes("@") ? "Valid email" : "invalid email";
};

console.log(email);
console.log (isValidEmail(email));


let username = prompt("Enter your username");


console.log(username);


let password = prompt("Enter your password");

function isValidPassword(password, username) {
    if (password.length < 8){
        return "invalid";
    } 
    if (password.includes(" ")){
        return "invalid";
    }
    if (password.includes(username)){
        return "invalid";
    }
    return "valid password";
}


console.log (password);
console.log (isValidPassword(password));




