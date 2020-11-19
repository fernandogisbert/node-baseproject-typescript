import {Request, Response} from 'express';
import{ User} from '../models/usuarios.model';
import { Op } from 'sequelize';

class UsersController {
    public async index (req: Request, res: Response){
       
            try {
                const usuarios = await User.findAll({raw:true})
                if(usuarios){
                    res.send(usuarios);
                }else{
                    res.sendStatus(404);
                }
            }catch(err){
                console.log(err);
                res.sendStatus(500);
            } 
        
    }
    public async user (req: Request, res: Response){
            try{
                const id = await User.findAll({
                     where:{
                        id: req.params.id
                     }
                ,raw:true})
                if(id){
                    res.send(id);
                }else{
                    res.sendStatus(404);
                }
            }catch(err){
                console.log(err);
                res.sendStatus(500);
            }
    }
}
export const userController = new UsersController();

