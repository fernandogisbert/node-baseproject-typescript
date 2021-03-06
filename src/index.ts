import express from 'express';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';


// Instanciar el framework express,  con lo que ya puedo utilizarlo
const app = express();

// configurar el puerto 
app.set('port', 3000);

// levantar el servidor con el puesto definido previamente 
app.listen(app.get('port'), () => {
    console.log(`the server is running on port ${app.get('port')}`)
});

// middlewares
app.use(express.json()); // hay q poner esto antes de las peticiones para poder intertrpetar json

// usamos la ruta que hemos exportado en user.routes.ts
app.use('/users', userRoutes.router);

// usamos la ruta que exportamos en product.routes.ts
app.use('/products', productRoutes.router);