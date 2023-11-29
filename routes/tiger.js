var express = require('express');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tiger', { title: 'Search Results tiger' });
});
var express = require('express');
const tiger_controlers=require('../controllers/tiger');
var router = express.Router();
/* GET tigers */
router.get('/', tiger_controlers.tiger_view_all_Page );
/* GET detail tiger page */
router.get('/detail', tiger_controlers.tiger_view_one_Page);

/* GET create tiger page */
router.get('/create',secured, tiger_controlers.tiger_create_Page);

/* GET create update page */
router.get('/update',secured, tiger_controlers.tiger_update_Page);

/* GET delete tiger page */
router.get('/delete',secured, tiger_controlers.tiger_delete_Page);


module.exports = router;

module.exports = router;

