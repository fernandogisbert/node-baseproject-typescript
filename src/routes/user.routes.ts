import {Router} from 'express';
import {userController} from '../controllers/users.controlles'

class UserRoutes{
    public router: Router = Router();

    constructor(){
        this.router.get('/', userController.index);

        this.router.get('/:id', userController.user )
    }
}

const userRoutes = new UserRoutes();

export default userRoutes;
