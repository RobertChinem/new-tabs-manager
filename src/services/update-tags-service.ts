import Tag from '../entities/tag'
import Repository from '../repositories/repository'

export default class UpdateTagsService {
  private repository = new Repository()

  async execute({tags}: UpdateTagsRequest) {
    await this.repository.updateTags(tags)
  }
}

export type UpdateTagsRequest = {
  tags: Tag[]
}
