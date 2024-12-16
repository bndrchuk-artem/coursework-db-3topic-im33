/* eslint-disable max-len */
import db from '../config/db.js';
import { databaseError, validationError, notFound } from '../ErrorHandler.js';

export const getAllMedia = async (req, res, next) => {
  try {
    const [media] = await db.query('SELECT * FROM Media');
    res.status(200).json(media);
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const getMediaById = async (req, res, next) => {
  try {
    const [media] = await db.query('SELECT * FROM Media WHERE id = ?', [req.params.id]);
    if (media.length === 0) {
      const error = notFound(`Media with ID ${req.params.id} not found`);
      return res.status(error.status).json({ error: error.message });
    }
    res.status(200).json(media[0]);
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const createMedia = async (req, res, next) => {
  const { title, keywords, userId } = req.body;
  const createdAt = new Date().toISOString().slice(0, 10);
  const updatedAt = createdAt;

  if (!title || !keywords || !userId) {
    const error = validationError('Title, keywords, and userId are required');
    return res.status(error.status).json({ error: error.message });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO Media (title, keywords, createdAt, updatedAt, userId) VALUES (?, ?, ?, ?, ?)',
      [title, keywords, createdAt, updatedAt, userId]
    );
    res.status(201).json({ message: 'Media created', mediaId: result.insertId });
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const updateMedia = async (req, res, next) => {
  const { title, keywords, userId } = req.body;
  const updatedAt = new Date().toISOString().slice(0, 10);

  if (!title || !keywords || !userId) {
    const error = validationError('Title, keywords, and userId are required');
    return res.status(error.status).json({ error: error.message });
  }

  try {
    const [result] = await db.query(
      'UPDATE Media SET title = ?, keywords = ?, updatedAt = ?, userId = ? WHERE id = ?',
      [title, keywords, updatedAt, userId, req.params.id]
    );

    if (result.affectedRows === 0) {
      const error = notFound(`Media with ID ${req.params.id} not found`);
      return res.status(error.status).json({ error: error.message });
    }

    res.status(200).json({ message: 'Media updated successfully' });
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const deleteMedia = async (req, res, next) => {
  try {
    const [result] = await db.query('DELETE FROM Media WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      const error = notFound(`Media with ID ${req.params.id} not found`);
      return res.status(error.status).json({ error: error.message });
    }

    res.status(200).json({ message: 'Media deleted successfully' });
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};
