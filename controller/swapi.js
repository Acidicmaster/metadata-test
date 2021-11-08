const asyncHandler = require("../middleware/async");
var axios = require('axios');

const getAllFilms = asyncHandler(async (req, res, next) => {

    axios.get('https://swapi.dev/api/films').then(resp => {

   // resp.data.results.sort();
    resp.data.results.sort(dynamicSort("title"));
    
    res.status(200).send({ status: "success", data :resp.data});
});

});


const filterFilmsByName = asyncHandler(async (req, res, next) => {

    const searchInfo = req.body.name;

    axios.get('https://swapi.dev/api/films').then(resp => {

        const filteredResults = resp.data.results.filter(char => {
            return char.title.includes(`${searchInfo}`);
         });

         
    
    res.status(200).send({ status: "success", data :filteredResults});
});

});


/**
 * Sort array items 
 */

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return  (a,b)=> {
     
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}



module.exports = {
    getAllFilms ,filterFilmsByName
  };