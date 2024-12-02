/*
 * This script is responsible for user input validation
 * It uses the `awesome-notications` package for pop-ups...
*/
let buttonv = document.querySelector("#match");

function validate () {    
    if (document.querySelector("#username").value === '')
        new AWN().warning('Name field is required!');
    if (!document.querySelector("#male").checked && !document.querySelector("#female").checked)
        new AWN().warning('Enter your gender!');
    if (document.querySelector("#userheight").value === '')
        new AWN().warning('Height field is required!');
    else{
        console.log("Validation is Complete. Proceeding...");
        return true;
    }
}