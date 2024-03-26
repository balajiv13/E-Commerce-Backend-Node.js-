const pool = require('../../config/database');

module.exports = {
    create: (data) => {
        return new Promise((resolve, reject) => {
            pool.query(`insert into users (first_name, last_name, email, password, phone_number, check_status) values (?, ?, ?, ?, ?, ?)`,

                [
                    data.firstName,
                    data.lastName,
                    data.email,
                    data.password,
                    data.mobileNumber,
                    data.acceptTerms
                ]
                , (error, results) => {
                    if (error) {
                        return reject(error)
                    } else {
                        return resolve(results)
                    }
                })
        })
    },

    getUsers: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from users where status = 'A'`, ((error, result) => {
                    if (error) {
                        return reject(error)
                    } else {
                        return resolve(result)
                    }
                })
            )
        })
    },
    getuserById: (id) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select first_name, last_name, email, id, role  from users where id = ? and status = 'A'`, [id], ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },
    updateUser: (data) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `update users set first_name= ?, last_name = ?, email = ?, password = ?, dob = ?, phone_number = ? where id = ? and status = 'A'`,
                [
                    data.first_name,
                    data.last_name,
                    data.email,
                    data.password,
                    data.dob,
                    data.phone_number,
                    data.id
                ],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },
    deleteuser: (id) => {
        return new Promise((resolve, reject)=>{
            pool.query(
                `update users set status = 'IA' where id = ? and status = 'A'`,
                [
                    id
                ],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result)
                })
            )
        })
    },
    getUserByEmail: (email) => {
        return new Promise((resolve, reject)=>{
            pool.query(
                `select * from users where email =? and status = 'A'`,
                [email],
                ((error, result) => {
                    if (error) return reject(error)
                    return resolve(result[0])
                })
            )
        })
    }
}