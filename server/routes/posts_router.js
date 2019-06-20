'use strict'

/**
 * Dependencies
 */

const express = require('express')
const PostsController = require('../controllers/PostsController')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /posts
 */

router.route('/')
  .get(PostsController.index)
  .post(PostsController.create)

/**
 * Routes
 *   GET,PUT,DELETE /posts/:id
 */

router.route('/:id')
  .get(PostsController.show)
  .put(PostsController.update)
  .delete(PostsController.destroy)

/**
 * Export router
 */

module.exports = router
