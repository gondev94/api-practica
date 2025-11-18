import * as Model from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
  const { category } = req.query;

  const products = await Model.getAllProducts();

  if (category) {
    const productsFiltered = products.filter((item) =>
      item.categories.includes(category)
    );
    res.status(200).json(productsFiltered);
    return;
  }
  res.json(products);
};

export const searchProduct = (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  const products = Model.getAllProducts();

  const productsFiltered = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  if (productsFiltered.length == 0) {
    return res.status(404).json({ error: "no se encontraron productos" });
  }
  res.json(productsFiltered);
};

export const getProductById = async (req, res) => {
  const id = req.params.id;

  const product = await Model.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, price, categories } = req.body;

  const product = await Model.createProduct({ name, price, categories });
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, categories } = req.body;

  if (!name || !price || !categories) {
    return res
      .status(422)
      .json({ error: "Nombre, precio y categoría son requeridos" }); //422 algo de lo que estoy enviando falta
  }

  const updated = await Model.updateProduct(id, { name, price, categories }); // se puede pasar req.body pero no sabemos que información puede venir, necesito estar seguro de lo que voy a guardar sea lo que necesito

  if (!updated) {
    return res.status(404).json({ error: "producto no encontrado" });
  }
  res.json(updated);
};

export const updatePatchProduct = async (req, res) => {
  const { id } = req.params;

  const data = {}  // creo un objeto data, puede haber  o no propiedades, 
  if (req.body.name !== undefined) data.name = req.body.name;
  if (req.body.price !== undefined) data.price = req.body.price;
  if (req.body.categories !== undefined) data.categories = req.body.categories;

  if (Object.keys(data).length === 0) {
    return res
      .status(422)
      .json({ error: "No se proporcionaron campos para actualizar " }); 
  }

  const updated = await Model.updatePatchProduct(id, data); // se puede pasar req.body pero no sabemos que información puede venir, necesito estar seguro de lo que voy a guardar sea lo que necesito

  if (!updated) {
    return res.status(404).json({ error: "producto no encontrado" });
  }
  res.json(updated);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deleted = await Model.deleteProduct(id);
  if (!deleted) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(204).send();
};
