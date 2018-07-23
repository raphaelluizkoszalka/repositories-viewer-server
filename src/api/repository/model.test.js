import { Repository } from '.'

let repository

beforeEach(async () => {
  repository = await Repository.create({ repositoryAPIUrl: 'test', repositoryHTMLUrl: 'test', repositoryOwner: 'test', repositoryName: 'test', userLogin: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = repository.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(repository.id)
    expect(view.repositoryAPIUrl).toBe(repository.repositoryAPIUrl)
    expect(view.repositoryHTMLUrl).toBe(repository.repositoryHTMLUrl)
    expect(view.repositoryOwner).toBe(repository.repositoryOwner)
    expect(view.repositoryName).toBe(repository.repositoryName)
    expect(view.userLogin).toBe(repository.userLogin)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = repository.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(repository.id)
    expect(view.repositoryAPIUrl).toBe(repository.repositoryAPIUrl)
    expect(view.repositoryHTMLUrl).toBe(repository.repositoryHTMLUrl)
    expect(view.repositoryOwner).toBe(repository.repositoryOwner)
    expect(view.repositoryName).toBe(repository.repositoryName)
    expect(view.userLogin).toBe(repository.userLogin)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
