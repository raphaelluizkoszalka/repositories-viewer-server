import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Repository } from '.'

const app = () => express(apiRoot, routes)

let repository

beforeEach(async () => {
  repository = await Repository.create({})
})

test('POST /repositories 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ repositoryAPIUrl: 'test', repositoryHTMLUrl: 'test', repositoryOwner: 'test', repositoryName: 'test', userLogin: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.repositoryAPIUrl).toEqual('test')
  expect(body.repositoryHTMLUrl).toEqual('test')
  expect(body.repositoryOwner).toEqual('test')
  expect(body.repositoryName).toEqual('test')
  expect(body.userLogin).toEqual('test')
})

test('GET /repositories 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /repositories/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${repository.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(repository.id)
})

test('GET /repositories/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /repositories/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${repository.id}`)
    .send({ repositoryAPIUrl: 'test', repositoryHTMLUrl: 'test', repositoryOwner: 'test', repositoryName: 'test', userLogin: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(repository.id)
  expect(body.repositoryAPIUrl).toEqual('test')
  expect(body.repositoryHTMLUrl).toEqual('test')
  expect(body.repositoryOwner).toEqual('test')
  expect(body.repositoryName).toEqual('test')
  expect(body.userLogin).toEqual('test')
})

test('PUT /repositories/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ repositoryAPIUrl: 'test', repositoryHTMLUrl: 'test', repositoryOwner: 'test', repositoryName: 'test', userLogin: 'test' })
  expect(status).toBe(404)
})

test('DELETE /repositories/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${repository.id}`)
  expect(status).toBe(204)
})

test('DELETE /repositories/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
