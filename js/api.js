const MAILING_LIST_API = 'https://api.staging.fourthwall.com/api/mailing-list';
const SHOP_ID_KEY = 'sh_9f57832f-456b-44f3-888f-8a370b155a18';

const ApiModule = (function ApiModule() {
  function postEmail(email) {
    const postConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-ShopId': SHOP_ID_KEY
      },
      body: JSON.stringify(email)
    };

    fetch(MAILING_LIST_API, postConfig)
      .then(response => {
        if (response.status === 201) UtilsModule.displaySuccessMessage();
      })
  }

  return {
    postEmail
  }
})();
