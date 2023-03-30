const router = require('express').Router()
const Account = require('./accounts-model');
const mid = require('./accounts-middleware');

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.getAll();
    res.status(200).json(accounts);
  } catch (err) {
    next(err);
  }
})

router.get('/:id', mid.checkAccountId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const account = await Account.getById(id);
    res.status(200).json(account);    
  } catch(err) {
    next(err);
  }
})

router.post('/', 
  mid.checkAccountNameUnique, 
  mid.checkAccountPayload,
  (req, res, next) => {
    try {
      res.json('post account');
    } catch(err) {
      next(err);
    }
})

router.put('/:id',
  [mid.checkAccountId, mid.checkAccountNameUnique, mid.checkAccountPayload],
(req, res, next) => {
  try {
    res.json('update account');
  } catch(err) {
    next(err);
  }
});

router.delete('/:id', mid.checkAccountId, (req, res, next) => {
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
