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

  static async update(post) {
    await db('posts').where({ id: id }).update(post)

    const new_post = await db('posts').where({ id: id })

    return new_post
  }

  static async destroy(id) {
    return await db('posts').where({ id: id }).del()
  }
}

/**
 * Define model
 */

module.exports = Post
