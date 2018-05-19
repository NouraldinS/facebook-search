const axios = require('axios');

module.exports = (req, res) => {
  req.body.pageid = 111029928948046; // MA'AN El Ekhbariah
  const { pageid } = req.body;
  axios.get(`https://graph.facebook.com/v3.0/${pageid}/feed?fields=created_time,description,full_picture,message,message_tags,name,picture,attachments{description,media,title,type},likes,with_tags,id,link&since=1483228800&until=1596275200&limit=100`)
    .then(fbRes => console.log(fbRes))
    .catch(err => console.log(err));
};
