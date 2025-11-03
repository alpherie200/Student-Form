//  console.log("login.js connected!"); //for testing
//  document.addEventListener("DOMContentLoaded",function(){
//     const form =document.getElementById("loginForm");

//     if (!form) {
//     console.error("❌Login form  not found!");
//     }
//     else if (form) {
//     form.addEventListener("submit",function(e)
//  {
//     e.preventDefault();
//     console.log("Form submitted!"); //for testing

//     //get inputs fields safely
    
   
//     const fullnameInput = document.getElementById("fullname")?.value.trim();
//     const passwordInput = document.getElementById("password")?.value.trim();

//     if(!roleSelect || !fullnameInput || !PasswordInput){
//         alert("one or more inputs fields not found in HTML!");
//         console.error("Missing:",{roleSelected, fullnameInput, PasswordInput});
//         return;
//     }
//     console.log("Role dropdown found?",document.getElementById("roleSelect")); //for testing
//      const roleSelect = document.getElementById("roleSelect").value;
//     const role = roleSelect? roleSelect.value.trim().toLowerCase():"";
//     const fullname = fullnameInput? fullnameInput.value.trim():"";
//     const password = passwordInput? passwordInput.value.trim():"";       
    
//     console.log("Selected role:",role);
//     console.log("Fullname:",fullname);
//     console.log("Password:",password);
   
    
// //validate inputs
//   if (!role) {
//         alert("Please select a role before logging in!");
//         return;        
//     }
//     if (!fullname || !password) {
//         alert("Please enter both fullname and password!");
//         return;
//     }
//     //redirect to correct dashboard based on role
//     if(role === "admin"){
//         window.location.href = "Admin.html";
//     }else if(role === "teacher"){
//          window.location.href = "Teacher.html";        
//     }else if(role === "parent"){
//          window.location.href = "Parent.html";

//     } else{
//         alert("invalid role selected.");
//     }
//      });
    
// }else{
//     console.error("Login form not found!");
// }
 

//  });
console.log("login.js connected!"); // just to confirm it's linked

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  if (!form) {
    console.error("Login form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted"); // testing

    const roleSelect = document.getElementById("roleSelect");
    const role = roleSelect ? roleSelect.value.trim().toLowerCase() : "";
    console.log("Selected role:", role);

    // Check if a role is selected
    if (!role) {
      alert("Please select a role before logging in!");
      return;
    }

    // Redirect based on role
    if (role === "admin") {
      window.location.href = "admin.html";
    } else if (role === "teacher") {
      window.location.href = "teacher.html";
    } else if (role === "parent") {
      window.location.href = "parent.html";
    } else {
      alert("Invalid role selected.");
    }
  });
});
