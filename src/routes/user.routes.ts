import {Router} from 'express';
import {userController} from '../controllers/users.controlles'

class UserRoutes{
    public router: Router = Router();

    constructor(){
        this.router.get('/', userController.index)
    }
}

const userRoutes = new UserRoutes();

export default userRoutes;
