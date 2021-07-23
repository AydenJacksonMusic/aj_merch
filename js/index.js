// Global Elements
const emailInput = document.getElementsByClassName('js-email-input')[0];
const emailBtn = document.getElementsByClassName('js-email-button')[0];
const errorMessage = document.getElementsByClassName('js-email-error')[0];
const successMessage = document.getElementsByClassName('js-email-success')[0];
const emailForm = document.getElementsByClassName('js-email-form')[0];

function removeClass(element, classValue) {
  element.classList.remove(classValue);
}

function addClass(element, classValue) {
  element.classList.add(classValue);
}

function hasClassName(element, classValue) {
  return element.classList.contains(classValue);
}

function enableBtn(btnIdentifier) {
  btnIdentifier.removeAttribute('disabled');
}

function disableBtn(btnIdentifier) {
  btnIdentifier.setAttribute('disabled', true);
}

function isEmailValid(email) {
  const regularExpressions = {
    avoidInvalidEmail: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
  }
  return email.match(regularExpressions.avoidInvalidEmail);
}

function displaySuccessMessage() {
  successMessage.classList.remove('d-none');
}

//Event Listeners
emailInput.addEventListener("keyup", (e) => {
  const email = e.currentTarget.value;

  if (isEmailValid(email)) {
    addClass(errorMessage, 'd-none');
    enableBtn(emailBtn);
  } else {
    disableBtn(emailBtn);
    removeClass(errorMessage, 'd-none');
  }
});

emailForm.addEventListener('submit', (e) => {
  debugger;
  postEmail({'email': emailInput.value})
  e.preventDefault();
});

function postEmail(email) {
  const MAILING_LIST_API = 'https://api.staging.fourthwall.com/api/mailing-list';
  const SHOP_ID_KEY = 'sh_9f57832f-456b-44f3-888f-8a370b155a18';
  fetch(MAILING_LIST_API,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-ShopId': SHOP_ID_KEY
    },
    body: JSON.stringify(email)
  })
    .then(response => {
      if (response.status === 201) displaySuccessMessage();
    })
}

