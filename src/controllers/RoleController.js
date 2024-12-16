/* eslint-disable max-len */
import db from '../config/db.js';
import { databaseError, validationError, notFound } from '../ErrorHandler.js';

export const getAllRoles = async (req, res, next) => {
  try {
    const [roles] = await db.query('SELECT * FROM Role');
    res.status(200).json(roles);
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const getRoleById = async (req, res, next) => {
  try {
    const [role] = await db.query('SELECT * FROM Role WHERE id = ?', [req.params.id]);
    if (role.length === 0) {
      const error = notFound(`Role with ID ${req.params.id} not found`);
      return res.status(error.status).json({ error: error.message });
    }
    res.status(200).json(role[0]);
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const addRole = async (req, res, next) => {
  const { roleName, permission } = req.body;

  if (!roleName || !permission) {
    const error = validationError('Role name and permission are required');
    return res.status(error.status).json({ error: error.message });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO Role (roleName, permission) VALUES (?, ?)',
      [roleName, permission]
    );
    res.status(201).json({ message: 'Role added', roleId: result.insertId });
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const updateRole = async (req, res, next) => {
  const { roleName, permission } = req.body;

  if (!roleName || !permission) {
    const error = validationError('Role name and permission are required');
    return res.status(error.status).json({ error: error.message });
  }

  try {
    const [result] = await db.query(
      'UPDATE Role SET roleName = ?, permission = ? WHERE id = ?',
      [roleName, permission, req.params.id]
    );

    if (result.affectedRows === 0) {
      const error = notFound(`Role with ID ${req.params.id} not found`);
      return res.status(error.status).json({ error: error.message });
    }

    res.status(200).json({ message: 'Role updated successfully' });
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};

export const deleteRole = async (req, res, next) => {
  try {
    const [result] = await db.query('DELETE FROM Role WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      const error = notFound(`Role with ID ${req.params.id} not found`);
      return res.status(error.status).json({ error: error.message });
    }

    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (err) {
    const error = databaseError(err.message);
    res.status(error.status).json({ error: error.message });
  }
};
