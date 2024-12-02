// An array of letters in the English Alpabhet for the hacker effect
const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Profie Details
let imagePath = "'assets/images/profiles/ladyMacbeth.jpg'";
let mName = 'Lady Macbeth';
let mGender = 'Female';
let mHeight = 100;
let button = document.querySelector("#match");

button.addEventListener('click', () => {
    // User Input Validation
    if (validate() === true){
        document.querySelector("#Mname #content").innerHTML = " " + mName;
        effect(document.querySelector("#Mname #content"));
        document.querySelector("#Mgender #content").innerHTML = " " + mGender;
        effect(document.querySelector("#Mgender #content"));
        document.querySelector("#Mheight #content").innerHTML = " " + mHeight + 'cm';
        effect(document.querySelector("#Mheight #content"));
    }
});

function effect(text){
    // Setting the new image profile on the right...
    document.querySelector('#right').style.backgroundImage="url("+imagePath+")";
    /*
    * This is the code for the hacker text effect
    * Just some fancy stuff for a basic site...
    */
    let original = text.innerText;
    let clone = '';
    let len = original.length;
    let key = len;

    const interval = setInterval(() => {
        for (let y = 0; y<key; y++)
            clone = clone + alpha[Math.floor(Math.random() * len)];
        console.log(clone);

        if (key > 0)
            text.innerText = original.substring(0, (len-key)) + clone;
        else if (key === 0)
            text.innerText = original.substring(0, (len-key));

        if (key === 0){
            key = len;
            clearInterval(interval);
        }
            
        console.log(key);
        clone = '';
        key--;

    }, 50);
}

/*
 * So this script is for the functionality of the button when clicked
 * It is supposed to transition from one profile to the other
 * ~LYR
 * */