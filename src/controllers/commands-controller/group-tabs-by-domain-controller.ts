import GroupTabsByDomainService from '../../services/group-tabs-by-domain-service'
import CommandsController from './commands-controller'

export default class GroupTabsByDomainController extends CommandsController {
  private service = new GroupTabsByDomainService()

  async execute() {
    await this.service.execute()
  }
}
