document.addEventListener('DOMContentLoaded', function() {
    // Variables for password toggle
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
  
    // Variables for date of birth calculation
    const dobInput = document.querySelector('#dob');
    const ageDisplay = document.querySelector('#age');
  
    // Variable for form submission
    const signupForm = document.querySelector('#signupForm');
  
    // Variables for profile picture upload
    const profilePicInput = document.querySelector('#profilePic');
    const profileImage = document.querySelector('#profileImage');
  
    // Event listener for toggling the password visibility
    if (togglePassword && password) {
      togglePassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
      });
    }
  
    // Event listener for date of birth change
    if (dobInput && ageDisplay) {
      dobInput.addEventListener('change', function() {
        const dob = new Date(this.value);
        let age = new Date().getFullYear() - dob.getFullYear();
        const m = new Date().getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && new Date().getDate() < dob.getDate())) {
          age--;
        }
        ageDisplay.value = age;
      });
    }
  
    // Event listener for form submission
    if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your JavaScript for signing up here
        alert('Signup successful!');
      });
    }
  
    // Event listener for profile picture change
    if (profilePicInput && profileImage) {
      profilePicInput.addEventListener('change', function(event) {
        if (event.target.files.length > 0) {
          const selectedFile = event.target.files[0];
          const reader = new FileReader();
          reader.onload = function(e) {
            profileImage.src = e.target.result;
            profileImage.style.display = 'block'; // Show the preview image
          };
          reader.onerror = function(e) {
            console.error('An error occurred reading the file:', e);
          };
          reader.readAsDataURL(selectedFile);
        }
      });
    }
  });
  