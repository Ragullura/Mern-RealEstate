import express from 'express';
import { deleteUser, signout, test ,updateUser,getUserListings,getUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test',test);
router.put('/update/:userId',verifyToken, updateUser); //put  request to update user info by id
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signout);
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)

export default router;