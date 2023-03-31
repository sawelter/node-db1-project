const db = require('../../data/db-config')


const getAll = () => {
  return db("accounts");
}

const getById = id => {
  return db("accounts").where("id", id).first();
}

const create = async account => {
  const [id] = await db("accounts").insert(account);
  return getById(id);
}

const updateById = (id, account) => {
  // update accounts set name=name, budget=budget where id=id
  // DO YOUR MAGIC
}

const deleteById = id => {
  return db('accounts').where('id', id).delete();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
