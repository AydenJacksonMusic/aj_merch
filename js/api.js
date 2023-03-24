const MAILING_LIST_API = 'https://api.staging.fourthwall.com/api/mailing-list';
const SHOP_ID_KEY = 'sh_1c4df5d4-13a6-4ee6-a596-affa21f5c2ee';

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
