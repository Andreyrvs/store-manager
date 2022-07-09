const productsModel = require('../models/productsModel');

const createIsValid = (name) => {
  if (typeof name !== 'string') return false;

  return true;
};

const create = async (name) => {
  const isNameValid = createIsValid(name);

  if (!isNameValid) return null;

  const result = await productsModel.create(name);

  return result;
};

const createSale = async (dataSales) => {
  const newSale = await Promise.all(dataSales.map((item) => productsModel.getById(item.productId)));

  const isValidSale = newSale.some((item) => item === null);

  if (isValidSale) return null;

  const result = await productsModel.createSale(dataSales);

  if (!result) return null;

  return result;
};

const getAll = async () => {
  const result = await productsModel.getAll();

  if (!result) return null;

  return result;
};

const getById = async (id) => {
  if (!id) return null;

  const result = await productsModel.getById(id);

  if (!result) return null;
  return result;
};

const updateById = async (id, name) => {
  const result = await productsModel.updateById(id, name);

  if (!result) return null;

  return result;
};

module.exports = {
  create,
  createSale,
  getAll,
  getById,
  updateById,
};