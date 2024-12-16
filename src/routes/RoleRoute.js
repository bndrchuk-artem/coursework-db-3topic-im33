import express from 'express';
import {
  getAllRoles,
  getRoleById,
  addRole,
  updateRole,
  deleteRole,
} from '../controllers/RoleController.js';

const router = express.Router();

router.get('/', getAllRoles);
router.get('/:id', getRoleById);
router.post('/', addRole);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);

export default router;
