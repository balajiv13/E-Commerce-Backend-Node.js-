const { fetchMenuCategoryList, getCategoryList1 } = require('./product.controller');
const router = require('express').Router();

router.post('/fetchMenuList', fetchMenuCategoryList);
router.post('/getCategoryList1', getCategoryList1);

module.exports = router