import {Router} from 'express';
import {userController} from '../controllers/users.controlles'

class UserRoutes{
    public router: Router = Router();

    constructor(){
        this.router.get('/', userController.index);

        this.router.get('/:id', userController.user );

        this.router.post('/', userController.create );

        this.router.delete('/:id', userController.delete );

        this.router.put('/:id', userController.update );


    }
}

const userRoutes = new UserRoutes();

export default userRoutes;
