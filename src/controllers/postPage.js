const axios = require('axios');

module.exports = (req, res) => {
  const options = {
    query: {
      access_token: 'EAACEdEose0cBANy945RIz1gMD113pcqEy9B94hdRpS7Iq5N9g8xNFAvvfA9axGEqnYrVnZB011uw4koOZCMAWSCk1TbDoDDFnDDuhKnA8sPfLwgq5f4dWwApIAiqyp53CplanptZBDwFzhphLawCRUZBTQBfte1yKsO8wcOoSrWZCiNrFH44Qke1IxZC2ZAAOtg3BycZA4KYqAZDZD',
    },
  };
  axios.get('https://graph.facebook.com/v3.0/MaanNews.net/posts?fields=created_time,description,full_picture,message,message_tags,name,picture,attachments{description,media,title,type},likes,with_tags,id,link&since=1483228800&until=1596275200&limit=100', options)
    .then(fbRes => console.log(fbRes))
    .catch(err => console.log(err));
};
