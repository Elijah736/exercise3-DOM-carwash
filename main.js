// Only display the errors when the user enters the incorrect credentials
// Upon successful login direct user to the index page

// Make use of if and else statements and use while loop to keep asking the user to enter
// the correct credentials

// Make links fade in and out depending on sidebar state
// Make use of css styling transform
// Sidebar animations can be toggled open and closed

// Make the side bar rotate 90 degrees when expanded



// =========================
//        Login page
// =========================

document.getElementById("login-form").addEventListener("submit", validateLogin);


function validateLogin(event) {
    event.preventDefault();


    const username = document.getElementById("uname").value.trim();
    const password = document.getElementById("pwd").value;


    const correctUsername = "admin";
    const correctPassword = "12345";


    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
        window.location.href = "index.html";
       
    } else {
        document.querySelector(".modal").style.display = "block";
    }
}


function dismissModal() {
    document.querySelector(".modal").style.display = "none";
}















function toggleNav() {

    let toggleStatus = false;
    const sidebar = document.querySelector(".nav-sidebar");
    const toggleBtn = document.querySelector(".btn-toggle-nav");
    const links = document.querySelectorAll(".nav-sidebar ul li a");

    if (!toggleStatus) {
        sidebar.style.width = "272px";
        toggleBtn.style.transform = "rotate(90deg)";

        
        links.forEach(link => {
            link.style.opacity = "1";
            link.style.visibility = "visible";
        });

            toggleStatus = true;
    } else {
        sidebar.style.width = "50px";
        toggleBtn.style.transform = "rotate(0deg)";


        links.forEach(link => {
            link.style.opacity = "0";
            link.style.visibility = "hidden";
        });


        toggleStatus = false;
    }
}
