const Account = require('./accounts-model');
const db = require('../../data/db-config')

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body;

  if(!name || !budget) {
    next({status: 400, message: "name and budget are required"});
  } else if(name.trim().length < 3 || name.trim().length > 100) {
    next({ status: 400, message: "name of account must be between 3 and 100" });
  } else if (isNaN(budget)) {
    next({status: 400, message: "budget of account must be a number"});
  } else if(budget < 0 || budget > 1000000) {
    next({status: 400, message: "budget of account is too large or too small" })
  } else {
    next();
  }
}

// checkAccountNameUnique returns a status 400 with a { message: "that name is taken" } if the trimmed req.body.name already exists in the database
exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const existing = await db('accounts').where('name', req.body.name.trim()).first();

    if(existing) {
      next({status: 400, message: "that name is taken"})
    } else {
      next();
    }

  } catch(err) {
    next(err);
  }

}


//checkAccountId returns a status 404 with a { message: "account not found" } if req.params.id does not exist in the database
exports.checkAccountId = async (req, res, next) => {
  const { id } = req.params;
  const account = await Account.getById(id);
  if(!account) {
    next({status: 404, message: "account not found"});
  } else {
    next();
  }
}
