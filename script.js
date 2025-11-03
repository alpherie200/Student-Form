const roleSelect = document.getElementById('role');
const adminSelect = document.getElementById('adminFields');
const teacherSelect = document.getElementById('teacherFields');
const parentSelect = document.getElementById('parentFields');

//Hide all extra fields initially
function hideAllFields() {
    adminFields.style.display = 'none';
    teacherFields.style.display = 'none';
    parentFields.style.display = 'none';  
}

roleSelect.addEventListener('change',function() {
    hideAllFields();

    const selectedRole = roleSelect.value;
    if(selectedRole === 'admin') {
        adminFields.style.display = 'block';
    }else if(selectedRole === 'teacher') {
        teacherFields.style.display = 'block';
    }else if(selectedRole === 'parent'){
        parentFields.style.display = 'block';

    } 
});

//optional:Handle form submission
document.getElementById('loginForm').addEventListener('submit',function(e){
    e.preventDefault();
    
    const selectedRole = roleSelect.value;
    const username = document.getElementBy('username').value.trim();

    if (!selectedRole) {
        alert("Please select a role before logging in!");
        return;        
    }
    //save username and role to localstorage
    localStorage.setItem("username",username);
    localStorage.setItem("role",selectedRole);

    alert(`Login successful as ${selectedRole.toUppercase()}!Redirecting...`);

    //Redirect based on role
    if(selectedRole === "admin"){
        window.location.href = "admin.html";
    }else if(selectedRole === "teacher"){
         window.location.href = "teacher.html";        
    }else if(selectedRole === "parent"){
         window.location.href = "parent.html";

    } 


});
