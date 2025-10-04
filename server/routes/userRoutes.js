import express from 'express'
import { checkAuth, Login, Signup, updateProfile } from '../controllers/UserController.js';
import protectRoute from '../middlewares/auth.js'

const userRouter=express.Router();

userRouter.post('/signup',Signup);
userRouter.post('/login',Login);
userRouter.put('/update-profile',protectRoute,updateProfile);
userRouter.get('/check',protectRoute,checkAuth);

export default userRouter;