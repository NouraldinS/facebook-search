const axios = require('axios');

module.exports = (req, res) => {
  req.body = { pageid: 111029928948046 }; // MA'AN El Ekhbariah
  const { pageid } = req.body;
  const options = {
    method: 'GET',
    url: `https://graph.facebook.com/v3.0/${pageid}/feed?fields=created_time,description,full_picture,message,message_tags,name,picture,attachments{description,media,title,type},likes,with_tags,id,link&since=1483228800&until=1596275200&limit=100`,
    headers: {
      authority: 'graph.facebook.com',
      method: 'GET',
      scheme: 'https',
      accept: '*/*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,ar;q=0.8',
      cookie: 'sb=bb-bWkzb0FonMhyeuit4o-0r; datr=dL-bWnCeCNKCby6EZ56Zq3qE; x-referer=eyJyIjoiL3N0b3J5LnBocD9zdG9yeV9mYmlkPTU2ODU5MzM2Njg0MDgxOSZpZD0xMDAwMTA3MDQ4Mjc5MTcmbm90aWZfdD1ub3RpZnlfbWUmbm90aWZfaWQ9MTUyMzg3NjE1MDMwMzI0MiZyZWY9bV9ub3RpZiZzb2Z0PW5vdGlmaWNhdGlvbnMiLCJoIjoiL3N0b3J5LnBocD9zdG9yeV9mYmlkPTU2ODU5MzM2Njg0MDgxOSZpZD0xMDAwMTA3MDQ4Mjc5MTcmbm90aWZfdD1ub3RpZnlfbWUmbm90aWZfaWQ9MTUyMzg3NjE1MDMwMzI0MiZyZWY9bV9ub3RpZiZzb2Z0PW5vdGlmaWNhdGlvbnMiLCJzIjoibSJ9; m_pixel_ratio=2.625; js_ver=3053; locale=en_GB; c_user=100002130700436; xs=44%3AjjcgDAlekr8q4g%3A2%3A1526209150%3A20781%3A6864; pl=n; fr=0FlGhJalEtq3HXMGU.AWUDyhMzxctCHUCdmBfe_Kqr90Q.Bam79t.qR.Fr4.0.0.BbAB3P.AWXDgHzZ; act=1526734831770%2F331; presence=EDvF3EtimeF1526735431EuserFA21B02130700436A2EstateFDutF1526735431934CEchFDp_5f1B02130700436F32CC; wd=797x981; pnl_data2=eyJhIjoib25hZnRlcmxvYWQiLCJjIjoiWERldmVsb3BlckV4cGxvcmVyQ29udHJvbGxlciIsImIiOmZhbHNlLCJkIjoiL3Rvb2xzL2V4cGxvcmVyLyIsImUiOltdfQ%3D%3D',
      referer: 'https://developers.facebook.com/',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'
    }
  };
  axios(options)
    .then(fbRes => console.log(fbRes))
    .catch(err => console.log(err));
};
