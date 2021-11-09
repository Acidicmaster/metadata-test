var express = require('express');
var router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Metadata test API documentation",
      version: "0.1.0",
      description:
        "This is the API documentation for metadata test APi",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Kenneth Uchechukwu",
        url: "",
        email: "kennethuche06@gmail.com",
      },
    },
    servers: [
      {
        url: "https://k-metadata.herokuapp.com/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};


const specs = swaggerJsdoc(options);


/* GET home page. */
router.use('/docs', swaggerUi.serve,swaggerUi.setup(specs) );
router.get('/docs' , swaggerUi.setup(specs));
 router.get('/', function(req, res, next) {
   res.send('API is running visit url/docs for documentation');
 });

module.exports = router;
