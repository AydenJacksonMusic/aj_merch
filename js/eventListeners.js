//Event Listeners Module
const EventListenerModule = (function EventListenerModule() {
  const addEmailFormListener = (emailForm) => {
    emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      ApiModule.postEmail({ 'email': emailInput.value })
    });
  }

  const addEmailInputListener = (emailInput) => {
    emailInput.addEventListener("keyup", (e) => {
      const email = e.currentTarget.value;
      if (UtilsModule.isEmailValid(email)) {
        UtilsModule.addClass(errorMessage, 'd-none');
        UtilsModule.enableBtn(emailBtn);
      } else {
        UtilsModule.disableBtn(emailBtn);
        UtilsModule.removeClass(errorMessage, 'd-none');
      }
    });
  }

  return {
    addEmailFormListener,
    addEmailInputListener,
  }
})();



