import express from 'express'
import db from './lib/db'
import md5 from './lib/md5'

const router = express.Router()

/* GET home page. */
router.get('/get', function(req, res, next) {
  res.json(req.signedCookies.admin === 'admin' );
})
router.get('/set', function (rer, res, next) {
  res.cookie('admin', 'admin', {httpOnly: true, signed: true });
  res.json('set')
})

router.get('/test', function (req, res, next) {
  let name = 'admin';
  let password = 'admin';
  password = md5.md5(password);
  db.query('insert into admin(name, password) values(?, ?)', [name, password], function (err, data) {
    if(err) {
      throw err;
    }
    if(data.affectedRows === 1) {
      res.send(data);
    }
  })
})

router.get('/login', function (req, res, next) {
  let result = {};
  let {name, password} = req.query;
  password = md5.md5(password);
  db.query('select * from admin where name=? and password=?', [name, password], function (err, data) {
    if(data.length === 1) {
      result.state = 1;
      res.cookie('admin', 'admin', {httpOnly: true, signed: true });
      // req.signedCookies.admin === 'admin' 来判断是否登录了
    } else {
      result.state = 0;
    }
    res.json(result)
  })
})

router.get('/logout', function (req, res, next) {
  res.clearCookie('admin');
  let result = {};
  result.state = 1;
  result.msg = '注销成功';
  res.json(result);
})

export default router
