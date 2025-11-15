import { Router } from "express";

const router = Router();

const products = [
    {
        id: 1,
        name: "Camiseta Deportiva",
        price: 150,
        categories: ["ropa", "deportes"],
    },
    {
        id: 2,
        name: "Auriculares Bluetooth",
        price: 250,
        categories: ["tecnologia", "audio"],
    },    
    {
        id: 3,
        name: "Mochila Escolar",
        price: 350,
        categories: ["mochilas", "escolar"],
    },
    {
        id: 4,
        name: "Calzado Deportivo",
        price: 450,
        categories: ["calzado", "deportes"],
    },    
    {
        id: 5,
        name: "Mouse Logitech",
        price: 150,
        categories: ["tecnologia", "perifericos"],
    
    },
]


router.get("/products", (req, res) => {
    const { category } = req.query

    if (category) {
        const productsFiltered = products.filter((item) => item.categories.includes(category))
        res.status(200).json(productsFiltered)
    } else {
        res.json(products);
    }
})

router.get("/products/search", (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({error: "El nombre es requerido"})
    }
    const productsFiltered = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase())
    )

    if (productsFiltered.length == 0) {
        return res.status(404).json({error: "no se encontraron productos"})
    }
    res.json(productsFiltered)
})

router.get("/products/:id", (req, res) => {
    
    const { id } = req.params
    
    const product = products.find((item) => item.id == id)

    if (!product) {
        res.status(404).json({error:"No existe el producto"})
    }
    res.json(product)
})
export default router;
