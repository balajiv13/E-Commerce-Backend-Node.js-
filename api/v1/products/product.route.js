const { fetchMenuCategoryList, getCategoryList1, getCategoryList2, getCategoryList7, getCategoryList6, getCategoryList5, getCategoryList4, getCategoryList3, getMovingStauts } = require('./product.controller');
const router = require('express').Router();

router.post('/fetchMenuList', fetchMenuCategoryList);
router.post('/getCategoryList1', getCategoryList1);
router.post('/getCategoryList2', getCategoryList2);
router.post('/getCategoryList3', getCategoryList3);
router.post('/getCategoryList4', getCategoryList4);
router.post('/getCategoryList5', getCategoryList5);
router.post('/getCategoryList6', getCategoryList6);
router.post('/getCategoryList7', getCategoryList7);
router.post('/getMovingStatus', getMovingStauts)

module.exports = router