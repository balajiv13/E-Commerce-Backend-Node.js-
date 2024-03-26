const {createUser, getUsersData, getUserById, deleteUser, updateUser, login, getUserByToken} = require('./user.controller')
const router = require('express').Router();
const {checkToken} = require('../../auth/token.validate')

router.post('/createUser',  createUser);
// router.post('/getUsers', getUsersData)
// router.post('/getUser', getUserById)
// router.post('/updateUser', updateUser) 
// router.post('/deleteUser', deleteUser)
// router.post('/login',login);


router.post('/getUsers', checkToken, getUsersData)
router.post('/getUser', checkToken, getUserById)
router.post('/updateuser', checkToken, updateUser) 
router.post('/deleteuser', checkToken, deleteUser)
router.post('/getUserData', getUserByToken)
router.post('/login',login);

module.exports = router