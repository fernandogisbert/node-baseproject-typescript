import {Request, Response} from 'express';
import{ User} from '../models/usuarios.model';
// import { Op } from 'sequelize';

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

    public async create(req: Request, res: Response){

        // res.sendStatus(200);
        try{
            const request = req.body;
            const newUser = await User.create(request);
    
            res.json(newUser);

        }catch(err){
            res.json(err);
        }
        
    }

    public async delete(req: Request, res: Response){
        console.log(req.params.id);

        try{
            const result = await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.sendStatus(201);
        }catch(err){
            res.json(err)
        }
    }

    public async update(req: Request, res: Response){
        console.log(req.params.id);

        try{
            const user = await User.update(
                {
                    name:req.body.name,
                    email:req.body.email
                },
                {
                    where: {
                        id:req.params.id
                    }
                }
            )
            res.json(user);
        }catch(err){
            res.json(err)
        }
    }
}
export const userController = new UsersController();

