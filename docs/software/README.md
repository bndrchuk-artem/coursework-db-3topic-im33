# Реалізація інформаційного та програмного забезпечення


## SQL-скрипт для створення початкового наповнення бази даних

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb`;

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8;
USE `mydb`;

-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Role`;

CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `roleName` VARCHAR(45) NOT NULL,
  `permission` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User`;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL UNIQUE,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Media`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Media`;

CREATE TABLE IF NOT EXISTS `mydb`.`Media` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `keywords` VARCHAR(45) NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  `userId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Media_User_idx` (`userId` ASC),
  CONSTRAINT `fk_Media_User`
    FOREIGN KEY (`userId`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Admin`;

CREATE TABLE IF NOT EXISTS `mydb`.`Admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`CommentModeration`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`CommentModeration`;

CREATE TABLE IF NOT EXISTS `mydb`.`CommentModeration` (
  `commentId` INT NOT NULL,
  `userId` INT NOT NULL,
  `moderatorId` INT NOT NULL,
  `moderationReason` VARCHAR(45) NULL,
  `moderationDate` DATE NOT NULL,
  `moderationStatus` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`commentId`),
  INDEX `fk_CommentModeration_Admin1_idx` (`moderatorId` ASC),
  INDEX `fk_CommentModeration_User1_idx` (`userId` ASC),
  CONSTRAINT `fk_CommentModeration_Admin1`
    FOREIGN KEY (`moderatorId`)
    REFERENCES `mydb`.`Admin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CommentModeration_User1`
    FOREIGN KEY (`userId`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`DeleteAccount`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`DeleteAccount`;

CREATE TABLE IF NOT EXISTS `mydb`.`DeleteAccount` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `reason` VARCHAR(45) NULL,
  `date` DATE NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  `adminId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_DeleteAccount_Admin1_idx` (`adminId` ASC),
  CONSTRAINT `fk_DeleteAccount_Admin1`
    FOREIGN KEY (`adminId`)
    REFERENCES `mydb`.`Admin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`UserRole`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`UserRole`;

CREATE TABLE IF NOT EXISTS `mydb`.`UserRole` (
  `userId` INT NOT NULL,
  `roleId` INT NOT NULL,
  PRIMARY KEY (`userId`, `roleId`),
  CONSTRAINT `fk_UserRole_User`
    FOREIGN KEY (`userId`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UserRole_Role`
    FOREIGN KEY (`roleId`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- Insert data into tables
START TRANSACTION;

-- Role
INSERT INTO `mydb`.`Role` (`id`, `roleName`, `permission`) VALUES
(1, 'Admin', 'Full Access'),
(2, 'Editor', 'Edit Content'),
(3, 'Viewer', 'View Content'),
(4, 'Moderator', 'Manage Comments'),
(5, 'Contributor', 'Submit Content');

-- User
INSERT INTO `mydb`.`User` (`id`, `firstName`, `lastName`, `email`, `password`) 
VALUES 
(1, 'John', 'Doe', 'john.doe@example.com', 'password123'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 'securepassword'),
(3, 'Alice', 'Johnson', 'alice.johnson@example.com', 'mypassword'),
(4, 'George', 'Joestar', 'george.joestar@example.com', 'bestpassword'),
(5, 'Nicole', 'Tesla', 'nicole.tesla@example.com', 'cringepassword');

-- Media
INSERT INTO `mydb`.`Media` (`id`, `title`, `keywords`, `createdAt`, `updatedAt`, `userId`) 
VALUES
(1, 'test.png', 'image', '2018-07-12', '2020-08-12', 1),
(2, 'Metallica.mp3', 'rock,music,guitar', '2019-07-12', '2020-08-12', 2),
(3, 'message.txt', 'text', '2019-03-07', '2020-03-07', 3),
(4, 'recipe.mp4', 'video,cooking', '2019-01-01', '2020-01-01', 4),
(5, 'test.png', 'image', '2018-06-11', '2020-08-12', 5);

-- Admin
INSERT INTO `mydb`.`Admin` (`id`, `name`) VALUES
(1, 'Super Admin'),
(2, 'Moderator Andryi'),
(3, 'Moderator Boris'),
(4, 'Deleted Admin 1'),
(5, 'Deleted Admin 2');

-- CommentModeration
INSERT INTO `mydb`.`CommentModeration` (`commentId`, `userId`, `moderatorId`, `moderationReason`, `moderationDate`, `moderationStatus`) VALUES
(1, 1, 2, 'Inappropriate Language', '2020-08-12', 'Removed'),
(2, 2, 1, 'Spam', '2024-11-13', 'Flagged'),
(3, 3, 3, 'Off-topic', '2020-08-12', 'Removed'),
(4, 4, 4, 'Hate Speech', '2019-01-01', 'Banned'),
(5, 5, 5, 'Misleading Info', '2020-08-12', 'Under Review');

-- DeleteAccount
INSERT INTO `mydb`.`DeleteAccount` (`id`, `userId`, `reason`, `date`, `type`, `description`, `adminId`) VALUES
(1, 3, 'Privacy Concerns', '2024-11-14', 'Permanent', 'User requested account deletion', 1),
(2, 2, 'Inactive Account', '2024-11-13', 'Temporary', 'Account marked as inactive', 2),
(3, 1, 'Too Many Emails', '2024-11-10', 'Temporary', 'User opted for temporary deactivation', 3),
(4, 4, 'Security Issues', '2024-10-01', 'Permanent', 'Security concerns raised by user', 4),
(5, 5, 'Other', '2024-09-15', 'Permanent', 'No specific reason provided', 5);

-- UserRole
INSERT INTO `mydb`.`UserRole` (`userId`, `roleId`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

COMMIT;
```

## RESTfull сервіс для управління даними
### Головний файл
```js
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/UserRoute.js';
import mediaRoutes from './routes/MediaRoute.js';
import roleRoutes from './routes/RoleRoute.js';
import { genericError } from './ErrorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/media', mediaRoutes);
app.use('/roles', roleRoutes);

app.use((err, req, res, next) => {
  const error = genericError(err.message);
  res.status(error.status).json({ error: error.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```
### Підключення бази даних
```js
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const db = pool.promise();

export default db;
```
### Контролери додатка
#### UserController
```js
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
```
#### MediaController
```js
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
```
#### RoleController
```js
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
```
### Маршрути додатка
#### UserRoute
```js
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
```
#### MediaRoute
```js
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
```
#### RoleRoute
```js
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
```
### ErrorHandler
```js
export const databaseError = (message) => ({
  status: 500,
  message: `Database error: ${message}`,
});

export const validationError = (message) => ({
  status: 400,
  message: `Validation error: ${message}`,
});

export const notFound = (message) => ({
  status: 404,
  message: `Not Found: ${message}`,
});

export const genericError = (message) => ({
  status: 500,
  message: `Internal Server Error: ${message}`,
});

```