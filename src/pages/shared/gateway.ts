import Actions from '../../actions'
import Command from '../../entities/command'
import DomainRule from '../../entities/domain-rule'

export default class Gateway {
  async saveDomainRules(domainRules: DomainRule[]) {
    await this.sendToBackgroundService(Actions.UPDATE_DOMAIN_RULES, domainRules)
  }

  async getDomainRules(): Promise<DomainRule[]> {
    const data = await this.sendToBackgroundService(
      Actions.GET_DOMAIN_RULES,
      null
    )
    return data as unknown as DomainRule[]
  }

  async getCommands(): Promise<Command[]> {
    const data = await this.sendToBackgroundService(Actions.GET_COMMANDS, null)
    return data as unknown as Command[]
  }

  async executeCommand(command: string) {
    await this.sendToBackgroundService(command)
  }

  private sendToBackgroundService(action: string, data?: any) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({action, data}, (response) => {
        resolve(response)
      })
    })
  }
}
