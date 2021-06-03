const express = require('express');
const { userController } = require('../../controllers');

const router = express.Router();

router.route('/users').get(userController.getAllUsers).post(userController.createUser);

router
  .route('/users/:userID')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
