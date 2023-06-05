import RequestMapper from '../../mappers/request-mapper'
import OpenAndExtractTabsByTagService from '../../services/open-and-extract-tabs-by-tag-service'
import {Context, MessagesController} from './messages-controller'

export default class OpenAndExtractTabsByTagController extends MessagesController {
  private mapper = new RequestMapper()
  private service = new OpenAndExtractTabsByTagService()

  async execute({request}: Context) {
    const openAndExtractTabsByTagRequest =
      this.mapper.toOpenAndExtractTabsByTagRequest(request)
    this.service.execute(openAndExtractTabsByTagRequest)
  }
}
