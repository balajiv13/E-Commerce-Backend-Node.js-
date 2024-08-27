const { fetchMenuCategoryList } = require('./product.controller');
const router = require('express').Router();

router.post('/fetchMenuList', fetchMenuCategoryList);

module.exports = router