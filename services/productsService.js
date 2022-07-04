const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getAll();

  if (!result) return null;

  return result;
};

const getById = async (id) => {
  const result = await productsModel.getById(id);

  if (!result) return null;

  return result;
};

module.exports = {
  getAll,
  getById,
};