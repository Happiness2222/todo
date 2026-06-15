let loggedInEmail = localStorage.getItem("loggedInEmail");

 if (!loggedInEmail) {
   alert("Please login first");
    window.location.href = "login.html";
 }

 let userData = 
 localStorage.getItem(loggedInEmail);

 if (userData) {
    let user = JSON.parse(userData);
 

 document.getElementById("firstname").value =
 (user.firstname || "").trim();

 document.getElementById("lastname").value =
 (user.lastname || "").trim();

 document.getElementById("phone").value =
 (user.phone || "").trim();

 document.getElementById("gender").value =
 (user.gender || "").trim();

 document.getElementById("bio").value = 
 user.bio || "";

 document.getElementById("email").value = loggedInEmail;

 }else {
    alert("User data not found");
   window.location.href = "welcome.html";
 }
 

 function saveProfile() {
   let firstnameValue =
   document.getElementById("firstname").value.trim();
   let lastnameValue =
   document.getElementById("lastname").value.trim();
   let phoneValue =
   document.getElementById("phone").value.trim();
   let genderValue =
   document.getElementById("gender").value.trim();
   let bioValue =
   document.getElementById("bio").value.trim();

   console.log("Firstname:", firstnameValue);
   console.log("Phone:", phoneValue);

   if (!updatedFirstName || !updatedLastName || !updatedPhone || !updatedGender) {
      alert("Please fill all fields");
      return;
   }
 
   let oldData =
   localStorage.getItem(loggedInEmail);
let existing =
JSON.parse(oldData);

   let existingUser =
   existingUser.skills || []

   let updatedUser = {
      firstname: firstnameValue.trim(),
      lastname: lastnameValue.trim(),
      phone: phoneValue.trim(),
      gender: genderValue.trim(),
      bio: bioValue.trim(),
      skills: savedUserData.email,
      email: savedUserData.email,
      password: savedUserData.password,
   };

   localStorage.setItem(loggedInEmail,JSON.stringify(updatedUser));
 
console.log("Saved user:", updatedUser);

   alert("Profile updated successfully!");
   window.location.href = "welcome.html";
 }

 function cancelEdit() {
   window.location.href = "welcome.html";
 }
