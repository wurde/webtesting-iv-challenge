'use strict'

/**
 * Dependencies
 */

const db = require('../../db/client')
const Post = require('../../models/Post')

/**
 * Hooks
 */

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.migrate.rollback(null, true)
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
