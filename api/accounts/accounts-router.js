const router = require('express').Router()
const Account = require('./accounts-model');

router.get('/', async (req, res, next) => {
  try {
    const accounts = Account.getAll();
    res.status(200).json(accounts);
  } catch (err) {
    next(err);
  }
})

router.get('/:id', (req, res, next) => {
  try {
  res.json('get account by id');    
  } catch(err) {
    next(err);
  }
})

router.post('/', (req, res, next) => {
  try {
    res.json('post account');
  } catch(err) {
    next(err);
  }
})

router.put('/:id', (req, res, next) => {
  try {
    res.json('update account');
  } catch(err) {
    next(err);
  }
});

router.delete('/:id', (req, res, next) => {
  try {
    res.json('delete account');
  } catch(err) {
    next(err);
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
   res.status(err.status || 500).json({
      message: err.message,
   })
})

module.exports = router;
