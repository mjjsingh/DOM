// Get form elements
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const submitButton = document.querySelector('[value="Submit"]');
const deleteButton = document.querySelector('[value="Delete"]');
const editButton = document.querySelector('[value="Edit"]');

// Load data from storage
loadData();

// Add event listeners
submitButton.addEventListener('click', saveData);
deleteButton.addEventListener('click', deleteData);
editButton.addEventListener('click', editData);

function loadData() {
    // Load data from storage
    const data = JSON.parse(localStorage.getItem('formData')) || {};
    nameInput.value = data.name || '';
    emailInput.value = data.email || '';
    phoneInput.value = data.phone || '';
}

function saveData() {
    // Save data to storage
    const data = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.values
    };
    localStorage.setItem('formData', JSON.stringify(data));
}

function deleteData() {
    // Delete data from storage
    localStorage.removeItem('formData');
    loadData();
}

function editData() {
    // Enable form fields for editing
    nameInput.disabled = false;
    emailInput.disabled = false;
    phoneInput.disabled = false;
}
