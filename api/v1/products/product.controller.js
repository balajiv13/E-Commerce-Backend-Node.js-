const AppError = require('../../../utils/appError');
const { fetchMenuCategory, getCategoryList1 } = require('./product.service');

module.exports = {
    fetchMenuCategoryList: async (req, res, next) => {
        try {
            const result = await fetchMenuCategory()
            if (!result.length) {
                throw new AppError('Record not found!', 404)
            }
            return res.json({
                success: 1,
                message: 'Data fetched Successfully',
                data: result,
            })
        } catch (e) {
            next(e);
        }
    },
    getCategoryList1: async (req, res, next) => {
        try {
            const result = await getCategoryList1()
            if (!result.length) {
                throw new AppError('Record not found!', 404)
            }
            return res.json({
                success: 1,
                message: 'Data fetched Successfully',
                data: result,
            })
        } catch (e) {
            next(e);
        }
    }
}