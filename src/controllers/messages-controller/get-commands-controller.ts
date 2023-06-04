import GetCommandsService from '../../services/get-commands-service'
import {Context, MessagesController} from './messages-controller'

export default class GetCommandsController extends MessagesController {
  private service = new GetCommandsService()

  async execute({sendResponse}: Context) {
    const commands = await this.service.execute()
    sendResponse(commands)
  }
}
