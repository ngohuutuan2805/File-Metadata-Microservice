var express = require('express');
var router = express.Router();

var multer = require('multer')
var upload = multer()

console.log("hoo")

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hihi")
  res.render('index', { title: 'Express' });
});

/* POST Upload file with post request. */
router.post('/get-file-size', upload.single('filename'), function (req, res, next) {
  console.log("get file size")
  res.json({
    "size":req.file.size
  })

})

module.exports = router;
