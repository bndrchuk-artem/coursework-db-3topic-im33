import express from 'express';
import {
  getAllMedia,
  getMediaById,
  createMedia,
  updateMedia,
  deleteMedia,
} from '../controllers/MediaController.js';

const router = express.Router();

router.get('/', getAllMedia);
router.get('/:id', getMediaById);
router.post('/', createMedia);
router.put('/:id', updateMedia);
router.delete('/:id', deleteMedia);

export default router;
