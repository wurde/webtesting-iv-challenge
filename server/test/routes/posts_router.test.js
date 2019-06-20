'use strict'

/**
 * Dependencies
 */

const supertest = require('supertest')
const app = require('../../app')
const db = require('../../db/client')

/**
 * Hooks
 */

afterEach(async () => {
  await db('posts').truncate()
})

/**
 * Assertions
 */

describe('posts_router.js', () => {
  test('NODE_ENV=test', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })

  test('POST /posts', async () => {
    let res = await supertest(app).post('/posts').send({ title: 'Test Post', content: 'This is some test content.' })

    expect(res.status).toBe(201)
  })

  test('DELETE /posts/:id', async () => {
    let res = await supertest(app).delete('/posts/1').send({ title: 'Test Post', content: 'This is some test content.' })

    expect(res.status).toBe(200)
  })
})
