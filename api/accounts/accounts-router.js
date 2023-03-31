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
  mid.checkAccountPayload,
  mid.checkAccountNameUnique,
  async (req, res, next) => {
    try {
      const newAccount = await Account.create({name: req.body.name.trim(), budget: req.body.budget.trim()});
      res.status(201).json(newAccount);
    } catch(err) {
      next(err);
    }
})

router.put('/:id',
  [mid.checkAccountId, mid.checkAccountPayload, mid.checkAccountNameUnique],
(req, res, next) => {
  try {
    res.json('update account');
  } catch(err) {
    next(err);
  }
});


router.delete('/:id', mid.checkAccountId, async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedAccount = await Account.getById(id);
    const results = await Account.deleteById(id);
    res.status(400).json(deletedAccount);
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
