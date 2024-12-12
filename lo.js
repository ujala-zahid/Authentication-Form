document.getElementById('Login-form').addEventListener('submit',
   function (e) {
          e.preventDefault();
    
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;


 if(!email.incliudes("@")) {
    alert("@ is missing in the email");
        return
 }


 if(password.length < 7) {
   alert("password must be atleast 7 characters long");
      return;
 }

 alert('login sucessful!');

document.getElementById('login-form').reset();
   }
)





















