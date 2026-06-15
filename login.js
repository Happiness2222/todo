function login(){
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;

   if (email === "" || password ==="") {
      alert("Please fill all fields");
      return;
   }
   let savedUser = localStorage.getItem(email);

   if (savedUser === null) {
      alert("No account found with this email. Please register first.");
      return;
   }

   let user = JSON.parse(savedUser);

   if (user.password === password) {
      localStorage.setItem("loggedInEmail", email);
      alert("Login successfull! Welcome" + user.firstname);
      window.location.href =
       "welcome.html";
   } else {
      alert("Incorrect password. Please try again.");
   }

}