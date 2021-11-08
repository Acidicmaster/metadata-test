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

module.exports = router;