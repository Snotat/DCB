var express = require("express");
var router = express.Router();
var axios = require("axios");

router.post("/", function (req, res, next) {
  console.log(req.body);
  axios({
    method: "get",
    url:
      "https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_LP2qtjgi0VDgdeYhHDDUT9MchYa3L&domainName=" +
      req.body.data +
      "&credits=DA",
  })
    .then(function (response) {
      console.log(response.data);
      res.json(response.data.DomainInfo);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
