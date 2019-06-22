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

  test('POST /posts - success', async () => {
    const res = await supertest(app).post('/posts').send({
      title: faker.lorem.lines(1),
      content: faker.lorem.lines(3)
    })

    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body).toBeTruthy()
    expect(Object.keys(res.body[0]).toString()).toBe(['id', 'title', 'content', 'created_at', 'updated_at'].toString())
  })

  test.todo('POST /posts - missing request body')
  test.todo('POST /posts - missing request body fields')

  test('DELETE /posts/:id - success', async () => {
    const res = await supertest(app).delete('/posts/1').send({
      title: faker.lorem.lines(1),
      content: faker.lorem.lines(3)
    })
    const post = await db('posts').where({ id: 1 })

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body).toBeFalsy()
    expect(post.length).toBe(0)
  })

  test.todo('DELETE /posts/:id - not found')
})
