// Global Elements
const emailInput = document.getElementsByClassName('js-email-input')[0];
const emailBtn = document.getElementsByClassName('js-email-button')[0];
const errorMessage = document.getElementsByClassName('js-email-error')[0];
const successMessage = document.getElementsByClassName('js-email-success')[0];
const emailForm = document.getElementsByClassName('js-email-form')[0];

function init() {
  EventListenerModule.addEmailFormListener(emailForm);
  EventListenerModule.addEmailInputListener(emailInput);
}

init();
