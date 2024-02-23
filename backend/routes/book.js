var express = require('express');
var router = express.Router();
const books = require('../constrollers/BooksControllers')

/* GET users listing. */
router.post('/', books.create);
router.get('/', books.read);
router.get('/:id', books.readbyid)
router.patch('/:id', books.update);
router.delete('/:id', books.delete);

module.exports = router;
