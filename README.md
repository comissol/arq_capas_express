# Ejercitación de Arquitectura Backend: API CRUD con Express y MongoDB 🖥️

## Descripción del Proyecto 📋

En este proyecto, desarrollarás una API RESTful utilizando **Express** y **MongoDB** que permitirá realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de perros. La aplicación tomará como base el archivo `dogs.json`, que contiene detalles de perros, como su nombre, raza, y edad. Tu objetivo es modelar y manipular esta información mediante una API que siga las prácticas de desarrollo vistas en clase.

> **Instrucciones:** Al finalizar, deberás completar este README.md con una documentación detallada de los endpoints de tu API. Asegúrate de incluir para cada endpoint:
> - Método HTTP (GET, POST, PUT, DELETE).
> - Ruta del endpoint.
> - Descripción de parámetros o query params.
> - Ejemplo del cuerpo de solicitud (si aplica).
> - Posibles respuestas en formato JSON.
> - Códigos de estado HTTP asociados.
> 
> Esta documentación te ayudará a estructurar tu API de forma clara y a mejorar la comprensión de los usuarios.

## Configuración del Entorno ⚙️

Antes de iniciar la aplicación, es necesario configurar las variables de entorno para la conexión con la base de datos MongoDB.

1.  **Crear el archivo `.env`**: En la raíz del proyecto, crea un archivo llamado `.env`.
2.  **Añadir las variables**: Completa el archivo `.env` con los siguientes datos, reemplazando los valores con tus credenciales de MongoDB:

    ```
    DB_PROTOCOL=mongodb+srv
    DB_HOST=<tu_cluster_host>
    DB_USER=<tu_usuario>
    DB_PASS=<tu_contraseña>
    DB_NAME=<tu_nombre_de_db>
    DB_OPTIONS=retryWrites=true&w=majority
    ```

El archivo `config/database.js` es el encargado de leer estas variables y establecer la conexión con la base de datos utilizando Mongoose.

## Documentación de la API 📖

A continuación se detallan los endpoints disponibles en la API para gestionar los perros.

---

<details>
<summary><strong>1. Obtener todos los perros</strong></summary>

- **Método HTTP:** `GET`
- **Ruta:** `/api/perros`
- **Descripción:** Devuelve una lista de todos los perros almacenados en la base de datos.
- **Parámetros:** Ninguno.
- **Respuesta Exitosa (Código `200 OK`):**
  ```json
  [
    {
      "_id": "60d5ec49f72e9e2f3c6e9b1a",
      "name": "Max",
      "breed": "Labrador Retriever",
      "age": 3,
      "isGoodBoy": true
    },
    {
      "_id": "60d5ec49f72e9e2f3c6e9b1b",
      "name": "Charlie",
      "breed": "German Shepherd",
      "age": 5,
      "isGoodBoy": true
    }
  ]
  ```
- **Respuesta de Error (Código `500 Internal Server Error`):**
  ```json
  {
    "mensaje": "Error al obtener los perros"
  }
  ```
</details>

---

<details>
<summary><strong>2. Obtener un perro por ID</strong></summary>

- **Método HTTP:** `GET`
- **Ruta:** `/api/perros/{id}`
- **Descripción:** Busca y devuelve un perro específico utilizando su ID de MongoDB.
- **Parámetros de Ruta:**
  - `{id}` (obligatorio): El ID único del perro.
- **Ejemplo de Solicitud:** `GET http://localhost:3000/api/perros/60d5ec49f72e9e2f3c6e9b1a`
- **Respuesta Exitosa (Código `200 OK`):**
  ```json
  {
    "_id": "60d5ec49f72e9e2f3c6e9b1a",
    "name": "Max",
    "breed": "Labrador Retriever",
    "age": 3,
    "isGoodBoy": true
  }
  ```
- **Respuesta de Error (Código `404 Not Found`):**
  ```json
  {
    "mensaje": "Perro no encontrado"
  }
  ```
</details>

---

<details>
<summary><strong>3. Agregar un nuevo perro</strong></summary>

- **Método HTTP:** `POST`
- **Ruta:** `/api/perros`
- **Descripción:** Crea y guarda un nuevo perro en la base de datos.
- **Cuerpo de la Solicitud (Ejemplo):**
  ```json
  {
    "name": "Buddy",
    "breed": "Golden Retriever",
    "age": 2,
    "isGoodBoy": true
  }
  ```
- **Respuesta Exitosa (Código `201 Created`):**
  ```json
  {
    "mensaje": "Perro agregado exitosamente",
    "perro": {
      "name": "Buddy",
      "breed": "Golden Retriever",
      "age": 2,
      "isGoodBoy": true,
      "_id": "60d5f2d1f72e9e2f3c6e9b1c"
    }
  }
  ```
- **Respuesta de Error (Código `400 Bad Request`):**
  ```json
  {
    "mensaje": "Los datos proporcionados son inválidos."
  }
  ```
</details>

---

<details>
<summary><strong>4. Actualizar un perro</strong></summary>

- **Método HTTP:** `PUT`
- **Ruta:** `/api/perros/{id}`
- **Descripción:** Modifica los datos de un perro existente, identificado por su ID.
- **Parámetros de Ruta:**
  - `{id}` (obligatorio): El ID del perro a actualizar.
- **Cuerpo de la Solicitud (Ejemplo):**
  ```json
  {
    "age": 4,
    "isGoodBoy": false
  }
  ```
- **Respuesta Exitosa (Código `200 OK`):**
  ```json
  {
    "mensaje": "Perro actualizado exitosamente",
    "perro": {
      "_id": "60d5ec49f72e9e2f3c6e9b1a",
      "name": "Max",
      "breed": "Labrador Retriever",
      "age": 4,
      "isGoodBoy": false
    }
  }
  ```
- **Respuesta de Error (Código `404 Not Found`):**
  ```json
  {
    "mensaje": "Perro no encontrado"
  }
  ```
</details>

---

<details>
<summary><strong>5. Eliminar un perro</strong></summary>

- **Método HTTP:** `DELETE`
- **Ruta:** `/api/perros/{id}`
- **Descripción:** Elimina un perro de la base de datos según su ID.
- **Parámetros de Ruta:**
  - `{id}` (obligatorio): El ID del perro a eliminar.
- **Ejemplo de Solicitud:** `DELETE http://localhost:3000/api/perros/60d5ec49f72e9e2f3c6e9b1a`
- **Respuesta Exitosa (Código `200 OK`):**
  ```json
  {
    "mensaje": "Perro eliminado exitosamente"
  }
  ```
- **Respuesta de Error (Código `404 Not Found`):**
  ```json
  {
    "mensaje": "Perro no encontrado"
  }
  ```
</details>

## Entrega 📌

Deberás diseñar y desarrollar una API backend que maneje la información de perros almacenada en MongoDB. Además, se espera que documentes los endpoints creados en el archivo README.md.

## Dataset Proporcionado 📂

- **dogs.json**: Contiene detalles de perros, incluyendo `name`, `breed`, `age`, y `isGoodBoy`. Este archivo será la referencia para el modelo de datos de MongoDB.

> **Instrucción:** Deberás importar este archivo `dogs.json` a tu base de datos en MongoDB Atlas. Sigue el procedimiento visto en clase para crear una nueva colección (por ejemplo, `dogs`) y cargar los datos desde el archivo JSON.

## Modelo de Base de Datos 📊

El archivo `dogs.json` incluye propiedades de cada perro. Deberás crear un modelo en Mongoose llamado `Dog`, con al menos los siguientes campos:

- **name**: Nombre del perro (por ejemplo, "Max", "Buddy").
- **breed**: Raza del perro (por ejemplo, "Labrador Retriever").
- **age**: Edad del perro en años.
- **isGoodBoy**: Valor booleano que indica si es un buen chico.

## Funcionalidades del CRUD 🚀

1. **Obtener todos los perros**
2. **Obtener un perro por ID**
3. **Agregar un nuevo perro**
4. **Actualizar un perro**
5. **Eliminar un perro**
6. **Control de Errores**

## Estructura del Repositorio 🗂️

```plaintext
/controllers
  - dogController.js
/json
  - dogs.json
/README.md
/app.js
/config/
  - database.js
/models/
  - dog.js
/routes/
  - dogRoutes.js
```

### Descripción de Archivos 📝

- **/json**: Contiene el archivo dogs.json con los datos de los perros.
- **/README.md**: Archivo con la descripción del proyecto y pasos para ejecutarlo.
- **/app.js**: Archivo principal de la aplicación Express.
- **/config/database.js**: Configuración de la conexión a MongoDB.
- **/models/**: Contiene el modelo de datos `Dog` para MongoDB.
- **/routes/**: Define las rutas de los endpoints del CRUD.
- **/controllers/**: Define los controladores de los endpoints del CRUD.

## Conclusión 🎉

Este proyecto te permitirá aplicar los conceptos clave de desarrollo backend con Express y Mongoose, además de gestionar datos en MongoDB. ¡Recuerda mantener tu código organizado y bien documentado!
"# arq_capas_express" 
