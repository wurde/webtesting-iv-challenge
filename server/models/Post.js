'use strict'

/**
 * Dependencies
 */

const db = require('../db/client')

/**
 * Define model
 */

class Post {
  static async all() {
    return await db('posts')
  }

  static async find(filter) {
    return await db('posts').where(filter).limit(1)
  }

  static async create(post) {
    const [id] = await db('posts').insert(post)

    const new_post = await db('posts').where({ id: id })

    return new_post
  }

  static async update(req, res) {
    return true
  }

  static async destroy(req, res) {
    return true
  }
}

/**
 * Define model
 */

module.exports = Post
