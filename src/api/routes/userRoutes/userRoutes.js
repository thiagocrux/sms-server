const express = require('express');
const { userController } = require('../../controllers');

const router = express.Router();

router.route('/login').post(userController.login);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:userID')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
