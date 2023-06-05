import RequestMapper from '../../mappers/request-mapper'
import ExtractTabsByTagService from '../../services/extract-tabs-by-tag-service'
import {Context, MessagesController} from './messages-controller'

export default class ExtractTabsByTagController extends MessagesController {
  private mapper = new RequestMapper()
  private service = new ExtractTabsByTagService()

  async execute({request}: Context) {
    const extractTabsByTagRequest =
      this.mapper.toExtractTabsByTagRequest(request)
    await this.service.execute(extractTabsByTagRequest)
  }
}
