
let nameError=document.getElementById("name-error");
let emailError=document.getElementById("email-error");
let phoneError=document.getElementById("phone-error");
let messageError=document.getElementById("message-error");
let submitError=document.getElementById("submit-error");


function validateName(){

let name=document.getElementById("name").value;

if(name.length==""){

    nameError.innerHTML="Name is required";
    nameError.style.color="red";
    nameError.style.fontSize="20px";
    return false;
}  

nameError.innerHTML="valid";
nameError.style.color="green";
nameError.style.fontSize="20px";
return true;
}

function validateEmail(){
let email=document.getElementById("email").value

if(email.length==""){
    emailError.innerHTML="Email is required";
    nameError.style.color="red";
    nameError.style.fontSize="20px";
    return false;
}
if(!email.match(/^[a-z0-9_.]*@[a-z]{2,5}\.[a-z]{2,4}$/)){
    emailError.innerHTML="Write email address properly";
    emailError.style.color="red";
    emailError.style.fontSize="20px";
    return false;
}
emailError.innerHTML="Valid";
emailError.style.color="green";
emailError.style.fontSize="20px";
return true;
}

function validatePhone(){
let phone=document.getElementById("cell").value;
if(phone.length==""){
    phoneError.innerHTML="Phone number is required";
    phoneError.style.color="red";
    phoneError.style.fontSize="20px";
    return false;
}
if(!phone.match(/^[0-9]{10}$/)){
phoneError.innerHTML="Phone number shoud be 10 digits";
phoneError.style.color="red";
phoneError.style.fontSize="20px";
return false;

}
phoneError.innerHTML="Valid";
phoneError.style.color="green";
phoneError.style.fontSize="20px";
return true;
}

function validateMessage(){
let message=document.getElementById("message").value;

if(message.length==""){

messageError.innerHTML="Message should not be blank";
messageError.style.color="red";
messageError.style.fontSize="20px";
return false;
}
if(!message.match(/^[A-Z a-z]{20,}$/)){

    messageError.innerHTML="Message should be 20 charecter length";
    messageError.style.color="red";
    messageError.style.fontSize="20px";
    return false;

}
messageError.innerHTML="Valid";
messageError.style.color="green";
messageError.style.fontSize="20px";
return true;
}

function validateForm(){

if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
submitError.style.display="block";
submitError.style.color="red";
submitError.style.fontSize="20px";
submitError.innerHTML="Please fill out all field carefully";
setTimeout(function(){submitError.style.display="none";},3000);
return false;
}

}