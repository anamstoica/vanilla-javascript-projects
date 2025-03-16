function submitHandler(event) {

  // Prevent form from default looping

  event.preventDefault();

  // Return form from HTML and store in variable

  const form = document.querySelector('form');

  // Store in class

  let formData = new FormData(form);

  let name = formData.get('name');

  let age = formData.get('age');

  let salary = formData.get('salary');

  let role = formData.get('role');

  //

  let formValid = false;

  const nameValidationErrors = document.createElement('div');
  nameValidationErrors.className = 'error-message';

  if (name.length < 2) {
    formValid = false;
    nameValidationErrors.innerHTML =
      nameValidationErrors.innerHTML +
      '<p style="color: red">Name must be less than 5 chars.</p>';
  } else if (!nameValidationErrors.innerHTML.length) {
    formValid = true;
  }

  const ageValidationErrors = document.createElement('div');
  ageValidationErrors.className = 'error-message';

  if (age.value < 18 || age.value > 100) {
    formValid = false;
    ageValidationErrors.innerHTML =
      '<p style="color: red">Age must be between 18 and 100!</p>';
  } else {
    formValid = true;
  }

  const salaryValidationErrors = document.createElement('div');
  salaryValidationErrors.className = 'error-message';

  if (salary.value < 5000 || salary.value > 100000) {
    formValid = false;
    salaryValidationErrors.innerHTML =
      '<p style="color: red">Age must be between 5000 and 100000!</p>';
  } else {
    formValid = true;
  }

  if (
    role.value === 'junior' &&
    (salary.value < 5000 || salary.value > 30000)
  ) {
    formValid = false;
    salaryValidationErrors.innerHTML =
      salaryValidationErrors.innerHTML +
      '<p style="color: red">Salary must be between 5000 and 30000!</p>';
  }
  if (
    role.value === 'senior' &&
    (salary.value < 30000 || salary.value > 60000)
  ) {
    formValid = false;
    salaryValidationErrors.innerHTML =
      salaryValidationErrors.innerHTML +
      '<p style="color: red">Salary must be between 30000 and 60000!</p>';
  }
  if (
    role.value === 'lead' &&
    (salary.value < 60000 || salary.value > 100000)
  ) {
    formValid = false;
    salaryValidationErrors.innerHTML =
      ValidationErrors.innerHTML +
      '<p style="color: red">Salary must be between 60000 and 100000!</p>';
  } else {
    formValid = true;
  }

  const formMessageId = 'form-valid-message';

  let formValidMessage = document.querySelector('#' + formMessageId);

  const errorMessages = document.getElementsByClassName('error-message');
  for (let errorMessage of errorMessages) {
    errorMessage.remove();
  }

  if (formValid) {
    if (!formValidMessage) {
      const formValidMessage = document.createElement('h2');

      formValidMessage.id = formMessageId;

      formValidMessage.innerText = 'Form submitted!';

      const submitButton = document.querySelector('#submit');

      submitButton.after(formValidMessage);
    }
  }
   formValid = false;
   
  if (!formValid) {
    if (formValidMessage) {
      formValidMessage.remove();
    }

    const nameElement = document.querySelector('#name');
    nameElement.after(nameValidationErrors);

    const ageElement = document.querySelector('#age');
    ageElement.after(ageValidationErrors);

    const salaryElement = document.querySelector('#salary');
    salaryElement.after(salaryValidationErrors);
  }
}