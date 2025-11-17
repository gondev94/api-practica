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

import { db } from "./firebase.js"
import { collection, getDocs, doc, getDoc } from "firebase/firestore";    

const productsCollection = collection(db, "products")

export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (id) => {
    try {
        const productRef = doc(productsCollection, id)
        const snapshot = await getDoc(productRef)
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    } catch (error) {
        console.error(`Error al obtener el producto con ID ${id}:`, error)
    }
}

