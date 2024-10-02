const AppError = require('../../../utils/appError');
const { fetchMenuCategory, getCategoryList1, getCategoryList2, getCategoryList3, getCategoryList4, getCategoryList5, getCategoryList6, getCategoryList7, getMovingStatus } = require('./product.service');

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
    },
    getCategoryList2: async (req, res, next) => {
        try {
            const result = await getCategoryList2()
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
    getCategoryList3: async (req, res, next) => {
        try {
            const result = await getCategoryList3()
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

    getCategoryList4: async (req, res, next) => {
        try {
            const result = await getCategoryList4()
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
    getCategoryList5: async (req, res, next) => {
        try {
            const result = await getCategoryList5()
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
    getCategoryList6: async (req, res, next) => {
        try {
            const result = await getCategoryList6()
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
    getCategoryList7: async (req, res, next) => {
        try {
            const result = await getCategoryList7()
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
    getMovingStauts: async (req, res, next) => {
        try {
            const result = await getMovingStatus()
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
}