const handleClick = (event) => {
  console.log(event);
};

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const title = document.querySelector('h1');
  title.addEventListener('click', handleClick);
  //  title.removeEventListener('click', handleClick);
  console.dir(title);
});

const setErrorMessage = (element) => {
  element.className = 'error-message';
};

const submitHandler = (event) => {
  // Prevent the default behaviour of refreshing the page
  event.preventDefault();

  // Remove any existing error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((errorMessage) => {
    errorMessage.remove();
  });

  // Form data
  const form = document.querySelector('form');
  const formData = new FormData(form);

  // Get the value of all the inputs
  const name = formData.get('name');
  const age = formData.get('age');
  const salary = formData.get('salary');
  const role = formData.get('role');

  let formValid = true;

  // Name validation
  const nameElement = document.querySelector('#name');
  if (name.length < 2) {
    formValid = false;
    const nameValidationErrors = document.createElement('p');
    setErrorMessage(nameValidationErrors);
    nameValidationErrors.style.color = 'red';
    nameValidationErrors.innerText = 'Name must be at least 2 characters long.';
    nameElement.after(nameValidationErrors);
  }

  // Age validation
  const ageElement = document.querySelector('#age');
  if (age < 18 || age > 100) {
    formValid = false;
    const ageValidationErrors = document.createElement('p');
    setErrorMessage(ageValidationErrors);
    ageValidationErrors.style.color = 'red';
    ageValidationErrors.innerText = 'Age must be between 18 and 100.';
    ageElement.after(ageValidationErrors);
  }

  // Salary validation
  const salaryElement = document.querySelector('#salary');
  if (salary < 5000 || salary > 100000) {
    formValid = false;
    const salaryValidationErrors = document.createElement('p');
    setErrorMessage(salaryValidationErrors);
    salaryValidationErrors.style.color = 'red';
    salaryValidationErrors.innerText =
      'Salary must be between 5000 and 100000.';
    salaryElement.after(salaryValidationErrors);
  }

  // Role validation
  const roleElement = document.querySelector('#role');
  if (role === 'junior' && (salary < 5000 || salary > 30000)) {
    formValid = false;
    const roleValidationErrors = document.createElement('p');
    setErrorMessage(roleValidationErrors);
    roleValidationErrors.style.color = 'red';
    roleValidationErrors.innerHTML +=
      '<p style="color: red">Junior must be between 5000 and 30000.</p>';
    roleElement.after(roleValidationErrors);
  }
  if (role === 'senior' && (salary < 30000 || salary > 60000)) {
    formValid = false;
    const roleValidationErrors = document.createElement('p');
    setErrorMessage(roleValidationErrors);
    roleValidationErrors.style.color = 'red';
    roleValidationErrors.innerHTML +=
      '<p style="color: red">Senior must be between 30000 and 60000.</p>';
    roleElement.after(roleValidationErrors);
  }
  if (role === 'lead' && (salary < 60000 || salary > 100000)) {
    formValid = false;
    const roleValidationErrors = document.createElement('p');
    setErrorMessage(roleValidationErrors);
    roleValidationErrors.style.color = 'red';
    roleValidationErrors.innerHTML +=
      '<p style="color: red">Lead must be between 60000 and 100000.</p>';
    roleElement.after(roleValidationErrors);
  }

  // Check if the form is valid
  const formValidMessageId = 'form-valid-message';
  const formValidMessage = document.querySelector(`#${formValidMessageId}`);
  const submitButton = document.querySelector('#submit');

  if (formValid) {
    // Remove any previous error messages
    document
      .querySelectorAll('.error-message')
      .forEach((element) => element.remove());

    // Show success message
    const successMessage = document.createElement('p');
    successMessage.style.color = 'green';
    successMessage.innerText = 'Form submitted successfully!';
    submitButton.after(successMessage);
  }
};
