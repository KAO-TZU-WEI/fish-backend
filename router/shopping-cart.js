const express = require('express');
const router = express.Router();
//ctrl
const shppingCartCtrl = require('../controllers/shopping-cart');
//auth
const auth = require('../middleware/auth');

//click shopping cart
router.get('/', auth, shppingCartCtrl.postCartAdd)

//get cart item list
router.post('/list', auth, shppingCartCtrl.postCartList)


module.exports = router;