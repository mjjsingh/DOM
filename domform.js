// Get form element
var form = document.querySelector('form');

// Add submit event listener to form
form.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get input values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  // Create user object
  var user = {
    name: name,
    email: email,
    phone: phone,
    date: date,
    time: time
  };

  // Store user object in local storage
  localStorage.setItem('user', JSON.stringify(user));

  // Change submit button text
  event.target.querySelector('input[type="submit"]').value = 'Submit';
});
