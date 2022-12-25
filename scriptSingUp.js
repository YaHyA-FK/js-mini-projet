let use=document.getElementById("username");
let em=document.getElementById("email");
let pass=document.getElementById("password");
let cpassword=document.getElementById("cpassword");


let useretat=false;
let emailetat=false;
let passwordetat=false;
let passwordconfirmation=false;

use.addEventListener("keyup",()=>{
    let use=document.getElementById("username");
    username = use.value;
    if(username!=="" && username.length<25 && username.length>3){
        document.getElementById("usernameerror").innerHTML='</br><span class="valide">valide</span>';
        document.getElementById("username").style.border="1px solid green";
        useretat=true;
    }
    else {
        document.getElementById("usernameerror").innerHTML="</br><span>ne peut pas être vide et comporte au moins 3 caractères et ne peut pas dépasser 25 caractères.</span>"
        document.getElementById("username").style.border="1px solid red";

    }
})
em.addEventListener("keyup",()=>{
    let em=document.getElementById("email");
    email=em.value;
    if(email.slice(email.length-3,email.length)===".ma"){
        document.getElementById("emailerror").innerHTML="</br><span class='valide'>valide</span>";
        document.getElementById("email").style.border="1px solid green";

        emailetat=true;
    }
    else {
        document.getElementById("emailerror").innerHTML="</br><span>email doit être correspondant à un pattern RegEx : example@example.ma</span>"
        document.getElementById("email").style.border="1px solid red";

    }

});
pass.addEventListener("keyup",()=>{
    let pass=document.getElementById("password");
    password=pass.value;
    if(password.length>=8 && password.match(/[0-9]/) && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[(!\@\#\$\%\^\&\*]/)){
        passwordetat=true;
        document.getElementById("passworderror").innerHTML="</br><span class='valide'>valide</span>";
        document.getElementById("password").style.border="1px solid green";


    }
    else {
        document.getElementById("passworderror").innerHTML="</br><span>Le mot de passe doit contenir au moins 8 caractères, dont au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial (!@#$%^&*).</span>"
        document.getElementById("password").style.border="1px solid red";

    }

})
cpassword.addEventListener("keyup",()=>{
    let cpassword=document.getElementById("cpassword");
    cp=cpassword.value;
    if(password===cp && cp!==""){
        passwordconfirmation=true;
        document.getElementById("cpassworderror").innerHTML="</br><span class='valide'>valide</span>";
        document.getElementById("cpassword").style.border="1px solid green";


    }
    else {
        document.getElementById("cpassword").style.border="1px solid red";
        document.getElementById("cpassworderror").innerHTML="</br><span>Le mot de passe de confirmation doit être le même que le mot de passe.<span/>";
    }
})


document.forms[0].onsubmit=(e)=>{
    if(useretat===false || emailetat===false || passwordetat===false || passwordconfirmation===false ){
        e.preventDefault();
    }
}

