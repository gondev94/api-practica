import express from 'express';

const app = express();

// app.use((req, res, next) => {
//     // res.json({message: "soy el middleware"})
//     console.log(req.method);
//     next();
// })

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

app.get("/", (req, res) => {
    res.send("bienvenidos a nuestra api rest")
})


app.get("/products", (req, res) => {
    const { category } = req.query

    if (category) {
        const productsFiltered = products.filter((item) => item.categories.includes(category))
        res.status(200).json(productsFiltered)
    } else {
        res.json(products);
    }
})

app.get("/products/:id", (req, res) => {
    
    const { id } = req.params
    
    const product = products.find((item) => item.id == id)

    if (!product) {
        res.status(404).json({error:"No existe el producto"})
    }
    res.json(product)
})


import notFound from "./src/middlewares/not-found.js"
app.use(notFound) // esto para cuando hago funcionalidad importo modulo 

const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))