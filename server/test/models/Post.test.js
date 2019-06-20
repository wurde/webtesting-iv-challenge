'use strict'

/**
 * Dependencies
 */

const db = require('../../db/client')

/**
 * Hooks
 */

beforeEach(async () => {
  await db('posts').truncate()
})

/**
 * Assertions
 */

describe('models/Post.js', () => {
  test('NODE_ENV=test', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })

  test('#all', () => {
    expect(true).toBe(true)
  })

  test('#find', () => {
    expect(true).toBe(true)
  })

  test('#create', () => {
    expect(true).toBe(true)
  })

  test('#update', () => {
    expect(true).toBe(true)
  })

  test('#destroy', () => {
    expect(true).toBe(true)
  })
})
