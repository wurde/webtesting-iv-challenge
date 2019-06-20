'use strict'

/**
 * Dependencies
 */

const Post = require('../models/Post')

/**
 * Define controller
 */

class PostsController {
  static async index(req, res) {
    res.sendStatus(200)
  }

  static async show(req, res) {
    res.sendStatus(200)
  }

  static async create(req, res) {
    res.sendStatus(200)
  }

  static async update(req, res) {
    res.sendStatus(200)
  }

  static async destroy(req, res) {
    res.sendStatus(200)
  }
}

/**
 * Define controller
 */

module.exports = PostsController
