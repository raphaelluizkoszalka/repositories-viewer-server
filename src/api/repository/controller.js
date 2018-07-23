import { success, notFound } from '../../services/response/'
import { Repository } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Repository.create(body)
    .then((repository) => repository.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) => {
  Repository.find(query, select, cursor)
    .then((repositories) => repositories.map((repository) => repository.view()))
    .then(success(res))
    .catch(next)
}

export const show = ({ params }, res, next) =>
  Repository.findById(params.id)
    .then(notFound(res))
    .then((repository) => repository ? repository.view() : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Repository.findById(params.id)
    .then(notFound(res))
    .then((repository) => repository ? repository.remove() : null)
    .then(success(res, 204))
    .catch(next)
