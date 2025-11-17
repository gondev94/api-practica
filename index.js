import "dotenv/config";
import express from "express";
import productsRouter from "./src/routes/products.router.js";

const app = express();

app.use(express.json()); //agregamos el middleware transforma la peticion en un body / o un bodyparser

// app.use((req, res, next) => {
//     // res.json({message: "soy el middleware"})
//     console.log(req.method);
//     next();
// })

app.get("/", (req, res) => {
  res.send("bienvenidos a nuestra api rest");
});

app.use(productsRouter);

import notFound from "./src/middlewares/not-found.js";
import { parse } from "dotenv";
app.use(notFound); // esto para cuando hago funcionalidad importo modulo

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


