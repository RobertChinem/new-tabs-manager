import GetTagsService from '../../services/get-tags-service'
import {Context, MessagesController} from './messages-controller'

export default class GetTagsController extends MessagesController {
  private service = new GetTagsService()

  async execute({sendResponse}: Context) {
    const tags = await this.service.execute()
    sendResponse(tags)
  }
}
