
document.getElementById("validateform").addEventListener("submit", function(event){
    event.preventDefault();

var username=document.getElementById("username").value.trim();
var password=document.getElementById("password").value.trim();
var confirmPassword=document.getElementById("confirmPassword").value.trim();


if (!username) {
    document.getElementById("usernameError").innerText = "required";
    isValid = false;
}

if (!password) {
    document.getElementById("passwordError").innerText = " required";
    isValid = false;
}

if (!confirmPassword) {
    document.getElementById("confirmPasswordError").innerText = " required";
    isValid = false;
}

if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
    isValid = false;
}

if (username && password && confirmPassword && password === confirmPassword) {
  
    alert("Registration successful! Welcome. " );
} else {
   
    alert("Please fill in all fields correctly.");
}  


});






