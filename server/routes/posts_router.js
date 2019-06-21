'use strict'

/**
 * Dependencies
 */

const express = require('express')
const require_body = require('../middleware/checks/require_body')
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
  .all(require_body(['title', 'content']))
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
