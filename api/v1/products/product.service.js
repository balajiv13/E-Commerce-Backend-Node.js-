const pool = require('../../../config/database');


const poolPromise = pool.promise();

module.exports = {
    fetchMenuCategory: async () => {
        try {
            // Fetch categories
            const [categories1] = await poolPromise.query(
                `SELECT cat1_name AS name, cat1_order AS dis_order FROM category_name WHERE status = 'A'`
            );
            const [categories2] = await poolPromise.query(
                `SELECT cat2_name AS name, cat2_order AS dis_order FROM category_name WHERE status = 'A'`
            );
            const [categories3] = await poolPromise.query(
                `SELECT cat3_name AS name, cat3_order AS dis_order FROM category_name WHERE status = 'A'`
            );
            const [categories4] = await poolPromise.query(
                `SELECT cat4_name AS name, cat4_order AS dis_order FROM category_name WHERE status = 'A'`
            );
            const [categories5] = await poolPromise.query(
                `SELECT cat5_name AS name, cat5_order AS dis_order FROM category_name WHERE status = 'A'`
            );
            const [categories6] = await poolPromise.query(
                `SELECT cat6_name AS name, cat6_order AS dis_order FROM category_name WHERE status = 'A'`
            );
            const [categories7] = await poolPromise.query(
                `SELECT cat7_name AS name, cat7_order AS dis_order FROM category_name WHERE status = 'A'`
            );

            // Fetch manufacturers
            const [manufacturers1] = await poolPromise.query(
                `SELECT s_no AS cat1_key, mfgr_code AS cat1_code, mfgr_name AS cat1_name FROM mfgr_mstr WHERE status = 1 ORDER BY cat1_name`
            );
            const [manufacturers2] = await poolPromise.query(
                `select s_no as cat2_key, item_code as cat2_code, item_description as cat2_name from item_mstr where status = 1 group by cat2_key  order by cat2_name`);
            const [manufacturers3] = await poolPromise.query(
                `select s_no as cat3_key, code as cat3_code, name as cat3_name from segment_mstr where status = 1 group by cat3_key  order by cat3_name`);
            const [manufacturers4] = await poolPromise.query(
                `select s_no as cat4_key, colour_code as cat4_code, colour_name as cat4_name from vehicle_type_mstr where status = 1 group by cat4_key  order by cat4_name`);
            const [manufacturers5] = await poolPromise.query(
                `select s_no as cat5_key, material_code as cat5_code, material_name as cat5_name  from vehicle_specification_mstr where status = 1 group by cat5_key  order by cat5_name`);
            const [manufacturers6] = await poolPromise.query(`select TYPE_KEY as cat6_key, TYPE_CODE as cat6_code, TYPE_NAME as cat6_name from type_mstr where status = 1`)
            const [manufacturers7] = await poolPromise.query(`select itemcat7_key as cat7_key, itemcat7_name as cat7_name, itemcat7_code as cat7_code from item_cat7_mstr where status = 1`);

            categories1[0].list = manufacturers1;
            categories2[0].list = manufacturers2;
            categories3[0].list = manufacturers3;
            categories4[0].list = manufacturers4;
            categories5[0].list = manufacturers5;
            categories6[0].list = manufacturers6;
            categories7[0].list = manufacturers7;
            const categories = [...categories1, ...categories2, ...categories3, ...categories4, ...categories5, ...categories6, ...categories7]
            return categories;
        } catch (error) {
            // console.error('Error fetching menu category:', error);
            throw error;  // Properly propagate the error
        }
    },

    getCategoryList1: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from mfgr_mstr where status = 1 `,
                [],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },
    getCategoryList2: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from item_mstr where status = 1 `,
                [],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },
    getCategoryList3: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from segment_mstr where status = 1 `,
                [],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },
    getCategoryList4: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from vehicle_type_mstr where status = 1 `,
                [],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },
    getCategoryList5: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from vehicle_specification_mstr where status = 1 `,
                [],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },
    getCategoryList6: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from type_mstr where status = 1 `,
                [],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },
    getCategoryList7: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from item_cat7_mstr where status = 1 `,
                [],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },
    getMovingStatus: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from item_move_status where status = 'A'`,
                [],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },

    getStorageLoaction: ()=>{
        
    }
};
