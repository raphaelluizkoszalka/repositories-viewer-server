import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, destroy } from './controller'
import { schema } from './model'
export Repository, { schema } from './model'

const router = new Router()
const { repositoryAPIUrl, repositoryHTMLUrl, repositoryOwner, repositoryName, userLogin } = schema.tree

/**
 * @api {post} /repositories Create repository
 * @apiName CreateRepository
 * @apiGroup Repository
 * @apiParam repositoryAPIUrl Repository's repositoryAPIUrl.
 * @apiParam repositoryHTMLUrl Repository's repositoryHTMLUrl.
 * @apiParam repositoryOwner Repository's repositoryOwner.
 * @apiParam repositoryName Repository's repositoryName.
 * @apiParam userLogin Repository's userLogin.
 * @apiSuccess {Object} repository Repository's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Repository not found.
 */
router.post('/',
  body({ repositoryAPIUrl, repositoryHTMLUrl, repositoryOwner, repositoryName, userLogin }),
  create)

/**
 * @api {get} /repositories Retrieve repositories
 * @apiName RetrieveRepositories
 * @apiGroup Repository
 * @apiUse listParams
 * @apiSuccess {Object[]} repositories List of repositories.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /repositories/:id Retrieve repository
 * @apiName RetrieveRepository
 * @apiGroup Repository
 * @apiSuccess {Object} repository Repository's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Repository not found.
 */
router.get('/:id',
  show)

/**
 * @api {delete} /repositories/:id Delete repository
 * @apiName DeleteRepository
 * @apiGroup Repository
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Repository not found.
 */
router.delete('/:id',
  destroy)

export default router
