var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {
  try {
    const db = req.app.locals.db;
    const books = await db.collection('Books').find().toArray();
    res.render('index', { title: 'Library', books });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
