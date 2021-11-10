const express = require('express');
// const UserModel = require('../models/User-model');
const UserCtrl = require('../controllers/User-ctrl');
const router = express.Router();

router.post('/user', UserCtrl.createUser);
router.get('/users', UserCtrl.getUsers);

module.exports = router;
// router.post('/user', (req, res) => {
//     const user = new UserModel({
    // id = req.body.id,
    // pw = req.body.pw,
    // name = req.body.name,
    // phone = req.body.phone,
    // part = req.body.part,
    // classs = req.body.classs
//     });
//     user.save({})
//         .then(() => {
//             console.log('회원저장')
//             return res.json({ success: true })
//         })
//         .catch((err) => console.log(err));
// })


// //CREATE
// module.exports = function (app, User) {
//     app.post('/login', (req, res) => {

//         const user = new User();
//         user.id = req.body.id;
//         user.pw = req.body.pw;
//         user.name = req.body.name;
//         user.phone = req.body.phone;
//         user.part = req.body.part;
//         user.class = req.body.class;
//         user.save(err => {
//             if (err) {
//                 console.log(err);
//                 res.json({ message: '생성실패' });
//                 return;

//             }

//             res.json({ message: '생성완료' });

//         });
//     });
// }
// //READ
// module.exports = function (app, User) {
//     //userId로 해당 유저 찾기
//     app.get('/find/:id', function (req, res) {
//         User.findOne({ id: req.params.id }, function (err, user) {
//             if (err) return res.status(500).json({ error: err });
//             if (!user) return res.status(404).json({ error: '해당 아이디가 존재하지 않습니다.' });
//             res.json(user);
//         })
//     });
// }