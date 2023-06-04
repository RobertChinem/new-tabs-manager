import UngroupTabsService from '../../services/ungroup-tabs-service'
import CommandsController from './commands-controller'

export default class UngroupTabsController extends CommandsController {
  private service = new UngroupTabsService()

  async execute() {
    await this.service.execute()
  }
}
