import * as Model from "../models/products.model.js";

export const getAllProducts = (req, res) => {
  const { category } = req.query;

  const products = Model.getAllProducts();

  if (category) {
    const productsFiltered = products.filter((item) =>
      item.categories.includes(category)
    );
    res.status(200).json(productsFiltered);
  } else {
    res.json(products);
  }
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
    const  id  = req.params.id;
    

    const product = await Model.getProductById(id);
    

    if (!product) {
      
        res.status(404).json({ error: "No existe el producto" });
        
    }
    
    res.json(product);

    
};

