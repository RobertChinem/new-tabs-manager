import RequestMapper from '../../mappers/request-mapper'
import UpdateTagsService from '../../services/update-tags-service'
import {Context, MessagesController} from './messages-controller'

export default class UpdateTagsController extends MessagesController {
  private mapper = new RequestMapper()
  private service = new UpdateTagsService()

  async execute({request}: Context) {
    const updateTagsRequest = this.mapper.toUpdateTagsRequest(request)
    await this.service.execute(updateTagsRequest)
  }
}
