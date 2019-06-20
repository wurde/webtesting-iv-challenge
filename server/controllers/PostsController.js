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
    try {
      const post = await Post.create(req.body)
      res.status(201).json(post)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }

  static async update(req, res) {
    res.sendStatus(200)
  }

  static async destroy(req, res) {
    try {
      await Post.destroy(req.params.id)
      res.sendStatus(200)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' } })
    }
  }
}

/**
 * Define controller
 */

module.exports = PostsController
