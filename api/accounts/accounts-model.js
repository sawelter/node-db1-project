const db = require('../../data/db-config')


const getAll = () => {
  // select * from accounts
  return db("accounts");
}

const getById = id => {
  // select * from accounts where id=id
  return db("accounts").where("id", id).first();
}

const create = account => {
  // insert into accounts (name, budget) values (name, budget)
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // update accounts set name=name, budget=budget where id=id
  // DO YOUR MAGIC
}

const deleteById = id => {
  // delete from accounts where id=id
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
