import RequestMapper from '../../mappers/request-mapper'
import UpdateDomainRulesService from '../../services/update-domain-rules-service'
import {Context, MessagesController} from './messages-controller'

export default class UpdateDomainRulesController extends MessagesController {
  private mapper = new RequestMapper()
  private service = new UpdateDomainRulesService()

  async execute({request}: Context): Promise<void> {
    const domainRules = this.mapper.toDomainRules(request)
    await this.service.execute(domainRules)
  }
}
