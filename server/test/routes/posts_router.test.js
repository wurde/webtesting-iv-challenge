'use strict'

/**
 * Dependencies
 */

const supertest = require('supertest')
const faker = require('faker')
const app = require('../../app')
const db = require('../../db/client')

/**
 * Hooks
 */

beforeAll(async () => {
  await db.migrate.rollback(null, true)
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

describe('posts_router.js', () => {
  test('NODE_ENV=test', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })

  test('POST /posts', async () => {
    let res = await supertest(app).post('/posts').send({
      title: faker.lorem.lines(1),
      content: faker.lorem.lines(3)
    })

    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body).toBeTruthy()
    expect(Object.keys(res.body[0]).toString()).toBe(['id', 'title', 'content', 'created_at', 'updated_at'].toString())
  })

  test('DELETE /posts/:id', async () => {
    let res = await supertest(app).delete('/posts/1').send({
      title: faker.lorem.lines(1),
      content: faker.lorem.lines(3)
    })
    let post = await db('posts').where({ id: 1 })

    expect(res.status).toBe(200)
    expect(post.length).toBe(0)
  })
})
