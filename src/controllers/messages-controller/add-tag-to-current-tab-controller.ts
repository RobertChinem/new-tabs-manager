import RequestMapper from '../../mappers/request-mapper'
import AddTagToCurrentTabService from '../../services/add-tag-to-current-tab-service'
import {Context} from './messages-controller'

export default class AddTagToCurrentTabController {
  private mapper = new RequestMapper()
  private service = new AddTagToCurrentTabService()

  async execute({request}: Context) {
    const addTagToCurrentTabRequest =
      this.mapper.toAddTagToCurrentTabRequest(request)
    this.service.execute(addTagToCurrentTabRequest)
  }
}
