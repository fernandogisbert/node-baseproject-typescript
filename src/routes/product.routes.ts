import {Router} from 'express';
import { productsController } from '../controllers/products.controller';


class ProductRoutes{
    public router: Router = Router();

    constructor(){
        this.router.get('/', productsController.index )
    }
}

const productRoutes = new ProductRoutes();

export default productRoutes;
