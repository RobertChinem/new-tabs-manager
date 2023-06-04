import DomainRule from '../entities/domain-rule'
import Repository from '../repositories/repository'

export default class UpdateDomainRulesService {
  private respoitory = new Repository()

  async execute(domainRules: DomainRule[]) {
    await this.respoitory.updateDomainRules(domainRules)
  }
}
