'use strict'

/**
 * Dependencies
 */

const db = require('../db/client')

/**
 * Define model
 */

class Post {
  static async all(req, res) {
    res.sendStatus(200)
  }

  static async find(req, res) {
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
 * Define model
 */

module.exports = Post
