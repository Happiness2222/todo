// Load user data when page opens
 let loggedInEmail =
localStorage.getItem("loggedInEmail");

let userData =
localStorage.getItem(loggedInEmail);

if (userData) {
    let user = JSON.parse(userData);

    let firstname = (user.firstname || "").trim()
    let lastname = (user.lastname || "").trim()
    let fullname = firstname + "" + lastname;

    let bio = user.bio;
    if (!bio || bio === "") {
        bio = "No bio added yet. Click Edit Profile to add bio!";
    }
    console.log("Bio loaded:", bio);
    // Display welcome message with user's name

    document.getElementById("welcomeMessage").
    innerHTML = `Welcome, ${user.firstname}!`;

    // Display profile information

    document.getElementById("profileInfo").innerHTML = `
            <div class="info-row">
                <span class="info-label">Full Name:</span>
                <span class="info-value">${fullname}</span>
            </div>
            <div class="info-row>
                 <span class="info-label">Email:</span>
                 <span class="info-value">${user.email}</span>
            </div>
            <div class="info-row>
                <span class="info-label">Phone:</span>
                <span class="info-value">${user.phone}</span>
            </div>
            <div class="info-row>
                 <span class="info-label">Gender:</span>
                 <span class="info-value">${user.gender}</span>
            </div>  
    `;

    document.getElementById("userBio").innerHTML = bio;
    let skills = user.skills || [];
    displaySkills(skills);
} else {

    document.getElementById("profileInfo").innerHTML = `<p style="color:red;">User data not found. Please login again.</p>`;
    }

    function logout() {
        localStorage.removeItem("loggedInEmail");
        alert("You have been logged out.");
        window.location.href = "login.html";
    }

    function editProfile() {
        alert("Edit Profile button was clicked");
    }

    function editProfile() {
        console.log("Edit Profile clicked!");
        window.location.href = "edit-profile.html";
    }

    function displaySkills(skills) {
        let container =
        document.getElementById("skillsContainer");

        if (!container) return;

        if (skills.lenght === 0) {
            container.innerHTML = `<p style="color: #999; font-size: 13px;">No skills added yet. Add your skill above!</p>`
            return;
        }

        container.innerHTML = "";
        skills.forEach((skill, index) =>{
            let skillTag =
            document.createElement("div");
            skillTag.className = "skill-tag";
            skillTag.innerHTML = `${skill}
            <span class="remove-skill" onclick="removeSkill(${index})">x</span>`;
            container.appendChild(skillTag);
        });
    }

    function addSkill() {
        let input =
        document.getElementById("newSkill");
        let skill = input.value.trim();

        if (skill === "") {
            alert("Please enter a skill");
            return;
        }

        let loggedInEmail =
        localStorage.getItem("loggedInEmail");
        let userData =
        localStorage.getItem("loggedInEmail");
        let user = JSON.parse(userData);

        let skills = user.skills || [];
        skills.push(skill);
        user.skills = skills;

        localStorage.setItem(loggedInEmail, JSON.stringify(user));

        input.value = "";
        displaySkills(skills);
    }

    function removeSkill(index) {
         let loggedInEmail = 
         localStorage.getItem("loggedInEmail");
         let userData =
         localStorage.getItem(loggedInEmail);
         let user = JSON.parse(userData);

         user.skills.splice(index, 1);
         localStorage.setItem(loggedInEmail, JSON.stringify(user));

         displaySkills(user.skills);
    }