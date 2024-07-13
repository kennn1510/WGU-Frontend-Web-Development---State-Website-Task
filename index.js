document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContainer');
    form.addEventListener('submit', function(event) {
      const email = document.getElementById('email').value;
      const confirmEmail = document.getElementById('confirmEmail').value;
  
      if (email !== confirmEmail) {
        event.preventDefault(); // Prevent form submission
        alert('Email and Confirm Email do not match.');
      }
    });
  });