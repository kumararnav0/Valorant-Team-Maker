document.addEventListener('DOMContentLoaded', (event) => {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
  
    togglePassword.addEventListener('click', function (e) {
      // Toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // Toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
    });
  });
  