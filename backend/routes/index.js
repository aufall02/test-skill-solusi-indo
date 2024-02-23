var express = require('express');
var router = express.Router();
const book = require('./book')




router.get('/', (req, res) => {
  res.send('Hello welcome to my test skill api')
})
// route books
router.use('/books', book)

// handler route not found
router.get('*', (req, res) => {
  res.status(404).send('Cari apa Hayooo???');
})

module.exports = router;