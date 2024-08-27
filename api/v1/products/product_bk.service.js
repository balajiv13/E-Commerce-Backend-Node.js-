const pool = require('../../../config/database');

module.exports = {

    getCategoryList1: () =>{
        return new Promise((resolve, reject)=>{
            pool.query(
                `select s_no as cat1_key, mfgr_code as cat1_code, mfgr_name as cat1_name from mfgr_mstr where status = 1 group by cat1_key order by cat1_name`,
                [],
                ((error, result)=>{
                    if(error) return reject(error)
                    return resolve(result[0])
                })
            )
        })
    },
    getCategoryList2: () =>{
        return new Promise((resolve, reject)=>{
            pool.query(
                `select s_no as cat2_key, item_code as cat2_code, item_description as cat2_name from item_mstr where status = 1 group by cat2_key  order by cat2_name`,
                [],
                ((error, result)=>{
                    if(error) return reject(error)
                    return resolve(result[0])
                })
            )
        })
    },
    getCategoryList3: () =>{
        return new Promise((resolve, reject)=>{
            pool.query(
                `select s_no as cat3_key, name as cat3_name, code as cat3_code from segment_mstr where status = 1 group by cat3_key  order by cat3_name`,
                [],
                ((error, result)=>{
                    if(error) return reject(error)
                    return resolve(result[0])
                })
            )
        })
    },
    getCategoryList4: () =>{
        return new Promise((resolve, reject)=>{
            pool.query(
                `select s_no as cat4_key, colour_code as cat4_code, colour_name as cat4_name from vehicle_type_mstr where status = 1 group by cat4_key  order by cat4_name`,
                [],
                ((error, result)=>{
                    if(error) return reject(error)
                    return resolve(result[0])
                })
            )
        })
    },
    getCategoryList5: () =>{
        return new Promise((resolve, reject)=>{
            pool.query(
                `select s_no as cat5_key, material_code as cat5_code, material_name as cat5_name  from vehicle_specification_mstr where status = 1 group by cat5_key  order by cat5_name`,
                [],
                ((error, result)=>{
                    if(error) return reject(error)
                    return resolve(result[0])
                })
            )
        })
    },

    // fetchCategoty: async ()=>{
    //         try {
    //           // Query 1
    //           const [fetch1] = await connection.promise().query(
    //             `SELECT cat1_name AS name, cat1_order AS dis_order
    //              FROM isteer_category_name
    //              WHERE application_id = ? AND status = 'A'`,
    //             [applicationId]
    //           );
        
    //           // Query for cat1
    //           const [cat1Fetch] = await connection.promise().query(
    //             `SELECT manu_key AS cat1_key, MANU_CODE AS cat1_code,
    //                     get_name('aerp_mfgr_mstr', manu_key) AS cat1_name
    //              FROM aerp_master_item
    //              WHERE active_status = '1'
    //              GROUP BY manu_key
    //              ORDER BY cat1_name`
    //           );
        
    //           fetch1[0]['list'] = cat1Fetch;
        
    //           // Query 2
    //           const [fetch2] = await connection.promise().query(
    //             `SELECT cat2_name AS name, cat2_order AS dis_order
    //              FROM isteer_category_name
    //              WHERE application_id = ? AND status = 'A'`,
    //             [applicationId]
    //           );
        
    //           // Query for cat2
    //           const [cat2Fetch] = await connection.promise().query(
    //             `SELECT item_key AS cat2_key, ITEM_CODE AS cat2_code,
    //                     get_name('aerp_item_mstr', item_key) AS cat2_name
    //              FROM aerp_master_item
    //              WHERE active_status = '1'
    //              GROUP BY cat2_key
    //              ORDER BY cat2_name`
    //           );
        
    //           fetch2[0]['list'] = cat2Fetch;
        
    //           // Query 3
    //           const [fetch3] = await connection.promise().query(
    //             `SELECT cat3_name AS name, cat3_order AS dis_order
    //              FROM isteer_category_name
    //              WHERE application_id = ? AND status = 'A'`,
    //             [applicationId]
    //           );
        
    //           // Query for cat3
    //           const [cat3Fetch] = await connection.promise().query(
    //             `SELECT thickness_dia_key AS cat3_key, THICKNESS_DIA AS cat3_code,
    //                     get_name('aerp_thick_dia_mstr', thickness_dia_key) AS cat3_name
    //              FROM aerp_master_item
    //              WHERE active_status = '1'
    //              GROUP BY cat3_key
    //              ORDER BY cat3_name`
    //           );
        
    //           fetch3[0]['list'] = cat3Fetch;
        
    //           // Query 4
    //           const [fetch4] = await connection.promise().query(
    //             `SELECT cat4_name AS name, cat4_order AS dis_order
    //              FROM isteer_category_name
    //              WHERE application_id = ? AND status = 'A'`,
    //             [applicationId]
    //           );
        
    //           // Query for cat4
    //           const [cat4Fetch] = await connection.promise().query(
    //             `SELECT color_key AS cat4_key, COLOR_CODE AS cat4_code,
    //                     get_name('aerp_colour_mstr', color_key) AS cat4_name
    //              FROM aerp_master_item
    //              WHERE active_status = '1'
    //              GROUP BY cat4_key
    //              ORDER BY cat4_name`
    //           );
        
    //           fetch4[0]['list'] = cat4Fetch;
        
    //           // Query 5
    //           const [fetch5] = await connection.promise().query(
    //             `SELECT cat5_name AS name, cat5_order AS dis_order
    //              FROM isteer_category_name
    //              WHERE application_id = ? AND status = 'A'`,
    //             [applicationId]
    //           );
        
    //           // Query for cat5
    //           const [cat5Fetch] = await connection.promise().query(
    //             `SELECT material_type_key AS cat5_key, MATERIAL_TYPE_CODE AS cat5_code,
    //                     get_name('aerp_material_mstr', material_type_key) AS cat5_name
    //              FROM aerp_master_item
    //              WHERE active_status = '1'
    //              GROUP BY cat5_key
    //              ORDER BY cat5_name`
    //           );
        
    //           fetch5[0]['list'] = cat5Fetch;
        
    //           // Query 6
    //           const [fetch6] = await connection.promise().query(
    //             `SELECT cat6_name AS name, cat6_order AS dis_order
    //              FROM isteer_category_name
    //              WHERE application_id = ? AND status = 'A'`,
    //             [applicationId]
    //           );
        
    //           // Query for cat6
    //           const [cat6Fetch] = await connection.promise().query(
    //             `SELECT item_type_key AS cat6_key,
    //                     (SELECT TYPE_CODE FROM aerp_type_mstr WHERE item_type_key = TYPE_KEY) AS cat6_code,
    //                     get_name('aerp_type_mstr', item_type_key) AS cat6_name
    //              FROM aerp_master_item
    //              WHERE active_status = '1'
    //              GROUP BY cat6_key
    //              ORDER BY cat6_name`
    //           );
        
    //           fetch6[0]['list'] = cat6Fetch;
        
    //           // Query 7
    //           const [fetch7] = await connection.promise().query(
    //             `SELECT cat7_name AS name, cat7_order AS dis_order
    //              FROM isteer_category_name
    //              WHERE application_id = ? AND status = 'A'`,
    //             [applicationId]
    //           );
        
    //           // Query for cat7
    //           const [cat7Fetch] = await connection.promise().query(
    //             `SELECT category7_key AS cat7_key,
    //                     (SELECT itemcat7_code FROM aerp_itemcategory7_mstr WHERE category7_key = itemcat7_key) AS cat7_code,
    //                     get_name('aerp_itemcategory7_mstr', category7_key) AS cat7_name
    //              FROM aerp_master_item
    //              WHERE active_status = '1'
    //              GROUP BY cat7_key
    //              ORDER BY cat7_name`
    //           );
        
    //           fetch7[0]['list'] = cat7Fetch;
        
    //           // Merge all fetched data
    //           let result = [...fetch1, ...fetch2, ...fetch3, ...fetch4, ...fetch5, ...fetch6, ...fetch7];
        
    //           // Send response
    //           res.json({ status: 1, data: result, msg: 'Data Fetched Successfully' });
        
    //         } catch (error) {
    //           console.error('Error fetching data:', error);
    //           res.status(500).json({ status: 0, msg: 'Error fetching data' });
    //         }
    // }

    fetchCategoty : ()=>{
     const applicationId = 1002
     const poolPromise = pool.promise();
     return new Promise((resolve, reject)=>{
        fetchData= async()=>{
            try {
               
                // Fetch data
                  // Query 1
                  const [fetch1] = await poolPromise.query(
                    `SELECT cat1_name AS name, cat1_order AS dis_order
                     FROM isteer_category_name
                     WHERE application_id = ? AND status = 'A'`,
                    [applicationId]
                  );
                  // Query for cat1
                  const [cat1Fetch] =  await poolPromise.query(
                    `SELECT manu_key AS cat1_key, MANU_CODE AS cat1_code,
                            get_name('aerp_mfgr_mstr', manu_key) AS cat1_name
                     FROM aerp_master_item
                     WHERE active_status = '1'
                     GROUP BY manu_key
                     ORDER BY cat1_name`
                  );
            
                  fetch1[0]['list'] = cat1Fetch;
            
                  // Query 2
                  const [fetch2] =  await poolPromise.query(
                    `SELECT cat2_name AS name, cat2_order AS dis_order
                     FROM isteer_category_name
                     WHERE application_id = ? AND status = 'A'`,
                    [applicationId]
                  );
            
                  // Query for cat2
                  const [cat2Fetch] =  await poolPromise.query(
                    `SELECT item_key AS cat2_key, ITEM_CODE AS cat2_code,
                            get_name('aerp_item_mstr', item_key) AS cat2_name
                     FROM aerp_master_item
                     WHERE active_status = '1'
                     GROUP BY cat2_key
                     ORDER BY cat2_name`
                  );
            
                  fetch2[0]['list'] = cat2Fetch;
            
                  // Query 3
                  const [fetch3] =  await poolPromise.query(
                    `SELECT cat3_name AS name, cat3_order AS dis_order
                     FROM isteer_category_name
                     WHERE application_id = ? AND status = 'A'`,
                    [applicationId]
                  );
            
                  // Query for cat3
                  const [cat3Fetch] =  await poolPromise.query(
                    `SELECT thickness_dia_key AS cat3_key, THICKNESS_DIA AS cat3_code,
                            get_name('aerp_thick_dia_mstr', thickness_dia_key) AS cat3_name
                     FROM aerp_master_item
                     WHERE active_status = '1'
                     GROUP BY cat3_key
                     ORDER BY cat3_name`
                  );
            
                  fetch3[0]['list'] = cat3Fetch;
            
                  // Query 4
                  const [fetch4] =  await poolPromise.query(
                    `SELECT cat4_name AS name, cat4_order AS dis_order
                     FROM isteer_category_name
                     WHERE application_id = ? AND status = 'A'`,
                    [applicationId]
                  );
            
                  // Query for cat4
                  const [cat4Fetch] =  await poolPromise.query(
                    `SELECT color_key AS cat4_key, COLOR_CODE AS cat4_code,
                            get_name('aerp_colour_mstr', color_key) AS cat4_name
                     FROM aerp_master_item
                     WHERE active_status = '1'
                     GROUP BY cat4_key
                     ORDER BY cat4_name`
                  );
            
                  fetch4[0]['list'] = cat4Fetch;
            
                  // Query 5
                  const [fetch5] =  await poolPromise.query(
                    `SELECT cat5_name AS name, cat5_order AS dis_order
                     FROM isteer_category_name
                     WHERE application_id = ? AND status = 'A'`,
                    [applicationId]
                  );
            
                  // Query for cat5
                  const [cat5Fetch] =  await poolPromise.query(
                    `SELECT material_type_key AS cat5_key, MATERIAL_TYPE_CODE AS cat5_code,
                            get_name('aerp_material_mstr', material_type_key) AS cat5_name
                     FROM aerp_master_item
                     WHERE active_status = '1'
                     GROUP BY cat5_key
                     ORDER BY cat5_name`
                  );
            
                  fetch5[0]['list'] = cat5Fetch;
            
                  // Query 6
                  const [fetch6] =  await poolPromise.query(
                    `SELECT cat6_name AS name, cat6_order AS dis_order
                     FROM isteer_category_name
                     WHERE application_id = ? AND status = 'A'`,
                    [applicationId]
                  );
            
                  // Query for cat6
                  const [cat6Fetch] =  await poolPromise.query(
                    `SELECT item_type_key AS cat6_key,
                            (SELECT TYPE_CODE FROM aerp_type_mstr WHERE item_type_key = TYPE_KEY) AS cat6_code,
                            get_name('aerp_type_mstr', item_type_key) AS cat6_name
                     FROM aerp_master_item
                     WHERE active_status = '1'
                     GROUP BY cat6_key
                     ORDER BY cat6_name`
                  );
            
                  fetch6[0]['list'] = cat6Fetch;
            
                  // Query 7
                  const [fetch7] =  await poolPromise.query(
                    `SELECT cat7_name AS name, cat7_order AS dis_order
                     FROM isteer_category_name
                     WHERE application_id = ? AND status = 'A'`,
                    [applicationId]
                  );
            
                  // Query for cat7
                  const [cat7Fetch] =  await poolPromise.query(
                    `SELECT category7_key AS cat7_key,
                            (SELECT itemcat7_code FROM aerp_itemcategory7_mstr WHERE category7_key = itemcat7_key) AS cat7_code,
                            get_name('aerp_itemcategory7_mstr', category7_key) AS cat7_name
                     FROM aerp_master_item
                     WHERE active_status = '1'
                     GROUP BY cat7_key
                     ORDER BY cat7_name`
                  );
            
                  fetch7[0]['list'] = cat7Fetch;
            
                  // Merge all fetched data
                  return result = [...fetch1, ...fetch2, ...fetch3, ...fetch4, ...fetch5, ...fetch6, ...fetch7];
                                  
              } catch (error) {
               reject(error)
           }

        }
        return resolve(fetchData())

     })
    }
}