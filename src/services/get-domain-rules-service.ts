import DomainRule from '../entities/domain-rule'
import Repository from '../repositories/repository'

export default class GetDomainRulesService {
  private respository = new Repository()

  async execute(): Promise<DomainRule[]> {
    return await this.respository.getDomainRules()
  }
}
