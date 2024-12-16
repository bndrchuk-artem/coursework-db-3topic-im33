/* eslint-disable max-len */
import db from '../config/db.js';
import { databaseError, validationError, notFound } from '../ErrorHandler.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const [users] = await db.query('SELECT * FROM User');
    res.status(200).json(users);
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const addUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    const error = validationError('First Name, Last Name, email, password are required');
    return res.status(error.status).json({ error: error.message });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO User (firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, password]
    );
    res.status(201).json({ message: 'User added', userId: result.insertId });
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const [user] = await db.query('SELECT * FROM User WHERE id = ?', [req.params.id]);
    if (user.length === 0) {
      const error = notFound(`User with ID ${req.params.id} not found`);
      return res.status(error.status).json({ error: error.message });
    }
    res.status(200).json(user[0]);
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const updateUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    const error = validationError('First Name, Last Name, email, password are required');
    return res.status(error.status).json({ error: error.message });
  }

  try {
    const [result] = await db.query(
      'UPDATE User SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?',
      [firstName, lastName, email, password, req.params.id]
    );

    if (result.affectedRows === 0) {
      const error = notFound(`User with ID ${req.params.id} not found`);
      return res.status(error.status).json({ error: error.message });
    }

    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const [result] = await db.query('DELETE FROM User WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      const error = notFound(`User with ID ${req.params.id} not found`);
      return res.status(error.status).json({ error: error.message });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};
