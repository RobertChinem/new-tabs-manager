import RequestMapper from '../../mappers/request-mapper'
import ExtractTabsService from '../../services/extract-tabs-service'
import {Context, MessagesController} from './messages-controller'

export default class ExtractTabsController extends MessagesController {
  private mapper = new RequestMapper()
  private service = new ExtractTabsService()

  async execute({request}: Context): Promise<void> {
    const extractTabsRequest = this.mapper.toExtractTabsRequest(request)
    await this.service.execute(extractTabsRequest)
  }
}
