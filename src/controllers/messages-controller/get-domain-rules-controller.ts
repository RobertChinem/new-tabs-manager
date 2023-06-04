import GetDomainRulesService from '../../services/get-domain-rules-service'
import {Context, MessagesController} from './messages-controller'

export default class GetDomainRulesController extends MessagesController {
  private service = new GetDomainRulesService()

  async execute({sendResponse}: Context) {
    const domainRules = await this.service.execute()
    sendResponse(domainRules)
  }
}
