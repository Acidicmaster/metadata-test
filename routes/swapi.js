const { getAllFilms,filterFilmsByName } = require("../controller/swapi.js");
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /api/swapi  :
 *   get:
 *     summary: Retrieve a list of Movies.
 *     description: Retrieve a list of Movies .
 *     responses:
 *       200:
 *         description: A list of Movies.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: ''
 */
router.get("/swapi",getAllFilms);

/**
 * @swagger
 * /api/swapi/search  :
 *   post:
 *     summary: Retrieve a search list of Movies passing name.
 *     description: Retrieve a search list of Movies .
 *     responses:
 *       200:
 *         description: A search list of Movies.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               body: {"name": "query"}
 *               items:
 *                 $ref: ''
 */
router.post("/swapi/search",filterFilmsByName);


/**
 * @swagger
 * /api/swapi/search:
 *   post:
 *     summary: Retrieve a search list of Movies passing name.
 *     responses:
 *       201:
 *         description: Search List
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     name:
 *                       type: string
 *                       description: A New Hope.
 *                       example: A New Hope
*/


module.exports = router;