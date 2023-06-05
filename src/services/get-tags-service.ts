import Repository from '../repositories/repository'

export default class GetTagsService {
  private repository = new Repository()

  async execute() {
    return this.repository.getTags()
  }
}
