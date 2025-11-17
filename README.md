## API REST en Node.js

## Descripción

API REST para gestiòn de productos desarrollada con Node.js y Express

## Instalaciòn

1. Clonar el repositorio
2. Instalar dependencias:

```shell
npm install
```

3. Configurar variables de entorno

```shell
# copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo de desarrollo:

```shell
npm run dev
```

## Documemntación de la API

### Obtener todos los productos

- **GET** `/products`
- **Descriciòn** Devuelve la lista de todos los productos.

- **Respuesta ejemplo**

```json
    [{ "id": 1, "name": "Camiseta Deportiva", "price": 150, "categories": ["ropa", "deportes"]}]
```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada
- **Parámetros:**
    -`name` (query, requerido): texto a buscar en el nombre del producto.
-**Ejemplo de uso:** `/products/search?name=camiseta`
-**Respuesta ejemplo:**


```json
[{"id": 1, "name": "Camiseta Deportiva", "price": 150 }]
```

### Buscar productos por id

- **GET** `/products/:id`
- **Descripción:** Devuelve los productos específico por su ID
- **Parámetros:**
    -`id` (path, requerido): ID del producto.
-**Ejemplo de uso:** `/products/1`
-**Respuesta ejemplo:**


```json
[{"id": 1, "name": "Camiseta Deportiva", "price": 150 }]
```