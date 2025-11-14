import express from 'express';

const app = express();

app.use((req, res, next) => {
    // res.json({message: "soy el middleware"})
    console.log(req.method);
    next();
})

app.get("/", (req, res) => {
    res.send("bienvenidos a nuestra api rest")
})


import notFound from "./src/middlewares/not-found.js"
app.use(notFound) // esto para cuando hago funcionalidad importo modulo 

const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))