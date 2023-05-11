const Email=document.getElementById("Emailinput");
const PaswordInput=document.getElementById("password");
const ConfirmPaswordInput=document.getElementById("PasworddAgain");
const registerButton=document.getElementById("ButtonRegistr");
const loginEmail = document.getElementById("loginEmaill");
const loginPassword = document.getElementById("loginPaswordInput");
const loginBtn = document.getElementById("loginButton");
const messagePart=document.getElementById("MessagePart");

let HolderArray=[];

let counter=0;
registerButton.addEventListener("click",function(){
    if(!Email.value.trim() || !PaswordInput.value.trim() || ConfirmPaswordInput.value.trim())
})