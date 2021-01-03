// Multi-part form handler library
const multer = require('multer');

var upload = multer({ dest: 'uploads/' })

// [router.get('/tweet/add', tweetController.addNew);]
exports.addTest =  (req, res) => {
  // console.log('##TEST##');
  res.render('test', { title: 'Test'});
};

// Middleware to handle image file upload in tweeet
exports.upload = (req, res) => {
  console.log(req.body);
  console.log(req.file);
}