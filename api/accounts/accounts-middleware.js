exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  console.log("going through middleware: check account by payload");
  next();
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("going through middleware: check account name unique");
  next();
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("going through middleware: check account id");
  next();
}
