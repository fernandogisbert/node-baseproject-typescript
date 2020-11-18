import {Request, Response} from 'express';

class UsersController {
    public index (req: Request, res: Response){
        res.send('ok la ruta funciona')
    }
}

export const userController = new UsersController();

