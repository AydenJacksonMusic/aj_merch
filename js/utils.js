const UtilsModule = (function UtilsModule() {
  function removeClass(element, classValue) {
    element.classList.remove(classValue);
  }

  function addClass(element, classValue) {
    element.classList.add(classValue);
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

  return {
    isEmailValid,
    addClass,
    removeClass,
    enableBtn,
    disableBtn,
    displaySuccessMessage,
  }
})();
