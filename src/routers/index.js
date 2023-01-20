import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ name: 'Jest a test', version: 'v1.15.0' });
});

router.get('/users', userController.getAllUsers);
router.get('/users/:cid', userController.getUserById);

router.post('/users', userController.createUser);
router.patch('/users/:cid', userController.createUser);
router.delete('/users', userController.createUser);

export default router;
