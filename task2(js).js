// Add event listener to the "Add Additional Field" button
document.getElementById('add-field-button').addEventListener('click', function() {
    const extraFieldsContainer = document.getElementById('extra-fields');
    
    // Create a new input field
    const newField = document.createElement('div');
    newField.innerHTML = `
      <label for="extra-field">Additional Field:</label>
      <input type="text" id="extra-field" name="extra-field">
    `;
    
    // Append the new input field to the container
    extraFieldsContainer.appendChild(newField);
  });
  
  // Add event listener to the registration form submission
  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data and perform registration logic
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Gather additional field data if present
    const additionalField = document.getElementById('extra-field') ? document.getElementById('extra-field').value : '';
    
    // Perform registration logic (e.g., send data to server, validate, etc.)
    // Example:
    console.log('Registration data:', { username, email, password, additionalField });
  });