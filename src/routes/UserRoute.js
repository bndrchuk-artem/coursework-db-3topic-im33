import express from 'express';
import {
  getAllUsers,
  addUser,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/UserController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
