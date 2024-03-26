const { create, getUsers, getuserById, updateUser, deleteuser, getUserByEmail } = require('./user.service');
const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign, verify } = require('jsonwebtoken');
const AppError = require('../../utils/appError');

module.exports = {
    createUser: async (req, res, next) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        try {
            const result = await create(body)
            return res.status(200).json({
                success: 1,
                message: 'New User Created Successfully!!',
                data: result,
            })
        } catch (e) {
            next(e)
        }
    },
    getUsersData: async (req, res, next) => {
        try {
            const result = await getUsers()
            if (!result.length) {
                throw new AppError('Record not found!', 404)
            }
            return res.json({
                success: 1,
                message: 'Data fetched Successfully',
                data: result,
            })
        } catch (e) {
            next(e)
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const id = req.body.id
            const result = await getuserById(id);
            if (!result.length) {
                throw new AppError('Record not found!', 404)
            }
            return res.json({
                success: 1,
                message: 'Data fetched Successfully',
                data: result,
            })
        } catch (e) {
            next(e)
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const body = req.body;
            const salt = genSaltSync(10);
            body.password = hashSync(body.password, salt);
            const result = await updateUser(body)
            return res.json({
                success: 1,
                message: 'Data Updated Successfully',
                data: result,
            })
        } catch (e) {
            next(e)
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const id = req.body.id
            const result = await deleteuser(id)
            return res.json({
                success: 1,
                message: 'User Removed Successfully',
                data: result,
            })
        } catch (e) {
            next(e)
        }
    },
    login: async (req, res, next) => {
        try {
            const body = req.body;
            const results = await getUserByEmail(body.email)
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Invalid email or password'
                })
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                results.phone_number = undefined;
                results.email = undefined;
                results.dob = undefined
                let userdata = {
                    firstName: results.first_name,
                    lastName: results.last_name,
                    email: results.email,
                    role: results.role,
                    isLoggedIn: true,
                    id: results.id
                }
                const jsonwebtoken = sign({ result: results }, process.env.ENC_KEY, {
                    expiresIn: '7d'
                });
                return res.json({
                    success: 1,
                    message: 'Login Successfully',
                    token: jsonwebtoken,
                    userdata
                })
            } else {
                return res.json({
                    success: 0,
                    message: 'Invalid email or password'
                })
            }
        } catch (e) {
            next(e)
        }
    },
    getUserByToken: async (req, res, next) => {
        try {
            let token = req.headers['x-access-token'] || req.headers['authorization'];
            if (/^Bearer/.test(token)) {
                token = token.split(" ")[1];
            }
            verify(token, process.env.ENC_KEY, async (err, decoded) => {
                if (err || !decoded) {
                    err.statusCode = 200;
                    next(err)
                    return
                }
                const result = await getuserById(decoded.result.id);
                if (!result.length) {
                    throw new AppError('Record not found!', 404)
                }
                result[0].isLoggedIn = true
                return res.json({
                    success: 1,
                    message: 'Data fetched Successfully',
                    data: result[0],
                })

            })

            if (!token) {
                return res.status(403).send({ success: 0, message: 'Invalid Token Data!!' })
            }
        } catch (e) {
            console.log('ERror::::', e)
            next(e)
        }
    }
}