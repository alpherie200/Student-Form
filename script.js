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
    alert('Login successful as ${roleselect.value.toUppercase()}!');
});
