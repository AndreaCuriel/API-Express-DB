### En el actual repositorio se encuentra el API con Express.

# Nuevo Feature Fullstack.

## Resumen de los requerimientos.

Servidor:

- Creación de una nueva tabla en la Base de Datos `eplorer_api` con el nombre `MissionCommander`.

| Campo | Tipo |
|:-------|:--------|
|id| Integer (autogenerado)|
|name| String| 
|username| String|
|mainStack| String|
|currentEnrollment| Boolean|
|hazAzureCertification| Boolean|
- Agregar los registros por mediio de los seeds.
- Crea un CRUD expuesto en un API en el server.js (métodos GET, POST, PUT, DELETE, recuerda que el método GET deberá tener 2 endpoints, uno para traer todos los registros y otro para consultar solo el registro por ID).

Cliente:

- En la pantalla inicial del front, consulta todos los registros en esta tabla y muéstralos.
- Agrega la posibilidad de agregar uno nuevo.
- Agrega la posibilidad de editar el mainStack.
- Agrega la posibilidad de eliminar el registro.

## [Servidor](https://github.com/AndreaCuriel/API-Express-DB)

Lenguaje: Javascript

Framwork: Node.js

Base de Datos: posgresSQL

Dependencias:

Express: Es un marco de desarrollo para estructurar la API mediante los metodos HTPP (GET, POST, PUT, DELETE).

Prisma: Permite la conexion de la Base de Datos con el Servidor, Generar consultas y migracion.

CORS: Permite que una App consuma la API, mediante URLs cruzados. 

### Procedimiento para el desarrollo del Servidor:

1. Crear el proyecto en node.js 
2. Craer el archivo `.gitignore` para no versionar node_models.
3. Crear el repositorio local con `git init`.
4. Crear una base de datos llamada `explorers_api`
5. Intalación de las dependencias:
- Express: `npm install express --save-dev`.
- Prisma: `npm install prisma --save-dev`. Inicializar con `npx prisma init`. Generara un archivo `.env`y la carpeta `prisma`. 
6. Modifica el archivo `.env` con el usuario, password y nombre de la Base de Datos. [.env](https://github.com/AndreaCuriel/API-Express-DB/blob/main/.env)
7. Abre el archivo `prisma/schema.prisma` y agrega un nuevo modelo `MisisonCommander` (Es la tabla requerida, en el repositorio encontraras este modelo y otros más). [schema.prisma](https://github.com/AndreaCuriel/API-Express-DB/blob/main/prisma/schema.prisma)
8. Para que dicho modelo se versione y lleguen los cambios a la Base de Datos, es necesario la migracion con el siguiente comando `npx prisma migrate dev --name`, el cual generara la carpeta `prisma/migrations/`. Puedes verificar que la tabla ya existe en la DB.
9. Crear un archivo `prisma/seed.js` donde se crearan los datos de la tabla `MissionCommander`.
10. Escribe el código para cada uno de las filas de la tabla en `prisma/seed.js`. [seed.js](https://github.com/AndreaCuriel/API-Express-DB/blob/main/prisma/seed.js). Corre el siguiente comando para que se generen `node prisma/seed.js`.
11. Crear un archivo `server.js` que contendra la inicialización del express, el cliente de Prisma, la habilitación de CORS y los endopoints con los métodos http (GET, PUSH, PUT, DELETE). [server.js](https://github.com/AndreaCuriel/API-Express-DB/blob/main/server.js).


## [Cliente](https://github.com/AndreaCuriel/client-MC)

Lenguaje: Javascript

Framwork: Vue3

Dependencias:

Axios: Es un Cliente HTTP basado en promesas para node.js. 

Nos permite interceptar las peticiones y respuestas.

Referencia: [AXIOS](https://axios-http.com/es/docs/intro#:~:text=Axios%20es%20un%20Cliente%20HTTP,modulo%20nativo%20http%20de%20node.)

### Procedimiento para el desarrollo del Cliente:
1. Creacion del proyecto Vue `vue create client-MC` donde se eligira la configuración manual para agregar el Router y elegir Vue 3.
2. Intalación de Axios `npm install axios`, agregando en package.json la dependencia.
3. Crear el archivo `http-common.js` en la carpeta src, la cual contienela configuración de Axios. En la línea 3, se especifica el URL del servidor, verifica antes de correr la app que sea el indicado (actualmente es el localhost:3000). [Código](https://github.com/AndreaCuriel/client-MC/blob/master/src/http-common.js)
4. Crear la capeta `Services` en `src`y dentro de ella el archivo `MissionCommanderService.js` que contendra la clase con los métodos que realizaran la peticiones con la API. [Código](https://github.com/AndreaCuriel/client-MC/blob/master/src/services/MissionCommanderService.js)
5. Ingresar la rutas de los componentes en `router/index.js`. [Código](https://github.com/AndreaCuriel/client-MC/blob/master/src/router/index.js)
7. Crear el navegador en `src/App.vue`.
8. Crear los componentes en `src/components`, con los siguientes nombres: `MissionCommanders.vue`, `IdMissionCommander.vue`, `AddMissionCommander.vue`. 
- Cada componente tiene la maquetación (lista y formularios) para la interracion con el cliente y los métodos que llamaran el resultado de las peticiones con la clase `MissionCommanderService`.

## Correr la aplicacion Cliente Servidor.
1. Reaiza un fork y clona los repositorios del Cliente y del servidor e instala las dependencias necesarias con `npm intall`.
2. Verificar que los URLs del Servidor y del Cliente esten correctas en los siguientes archivos.
- Servidor: En el archivo server.js en la línea 13, donde es la inicialización del CORS, la URL es: `"http://localhost:8080"` (Url donde corre el Cliente, puede variar la url, en su caso verificar cual es la correspondiente). [server.js](https://github.com/AndreaCuriel/API-Express-DB/blob/main/server.js)
- Cliente: En el archivo `http-common.js` en la carpeta src, la cual contienela configuración de Axios. En la línea 3 verifica la url `localhost:3000` (ulr donde corre el Servidor). [Código](https://github.com/AndreaCuriel/client-MC/blob/master/src/http-common.js)
3. Servidor: Ingresar la información de la Base de Datos para tener una exitosa conexion con la API. La cual se encuentra en `.env`. No versione el username y password. [.env](https://github.com/AndreaCuriel/API-Express-DB/blob/main/.env)
4. Servidor: Corre la app con `node server.js`.
5. Cliente: Corre la app con `npm run serve`.
