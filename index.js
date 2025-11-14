import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("bienvenidos a nuestra api rest")
})


const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))