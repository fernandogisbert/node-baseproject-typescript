import {Request, Response} from 'express';
// import { Op } from 'sequelize';
import{Products} from '../models/products.model';
import{Providers} from '../models/providers.model';
// import sequelize  from 'sequelize/types';

class ProductsController {
    public async index (req: Request, res: Response){

        try{
            const products = await Products.findAll({
                // where:{
                //     name: {
                //         [Op.like]: '%p%'
                //     }
                // }
                // ,
                 raw:true});
            if(products){
                res.send(products);
            }else{
                res.sendStatus(404);
            }
        }catch(err){
            console.log(err);
            res.sendStatus(500);
        }
    }

    public async product (req: Request, res: Response){
        
        try{
            const product = await Products.findAll(
                {
                where:{id: req.params.id},
                include: Providers
            });
            if(product){
                res.send(product);
            }else{
                res.sendStatus(404);
            }
        }catch(err){
            console.log(err);
            res.sendStatus(500);
        };
    }
        // try {
        //     const providers = await Providers.findAll({raw:true})
        //         res.send(providers);
        // }catch(err){
        //     console.log(err);
        //     res.sendStatus(500);
        // }
}
    // public index (req: Request, res: Response){
    //     // Products.findByPk() aqui pondria el numero del id correspondiendte
    //     Products.findAll({raw:true})
    //     .then(products => res.send(products))
    //     .catch(err => res.send(err));
    // } 


export const productsController = new ProductsController();

