import GroupTabsByDomainService from '../../services/group-tabs-by-domain-service'
import {MessagesController} from './messages-controller'

export default class GroupTabsByDomainController extends MessagesController {
  private service = new GroupTabsByDomainService()

  async execute() {
    await this.service.execute()
  }
}
