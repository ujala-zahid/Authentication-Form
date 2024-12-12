document.getElementById('Signup-form').addEventListener('submit', function (e) { e.preventDefault();

const name = document.getElementById('name');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmpassword = document.getElementById('confirmpassword').value;

if(email.includes("@")) {
  alert("@ is missing in the email");
       return;
}
if(password.length < 7) {
  alert("Password must be atleast 7 characters long.");
     return;
}

if(password !== confirmpassword) {
  alert("password does not match");
   return;
}
alert('signup sucessfull!');

document.getElementById('signup-form').reset();
})