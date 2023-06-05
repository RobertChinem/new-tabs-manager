import Actions from '../../actions'
import Command from '../../entities/command'
import DomainRule from '../../entities/domain-rule'
import Tag from '../../entities/tag'

export default class Gateway {
  async saveDomainRules(domainRules: DomainRule[]) {
    await this.sendToBackgroundService(Actions.UPDATE_DOMAIN_RULES, domainRules)
  }

  async saveTags(tags: Tag[]) {
    await this.sendToBackgroundService(Actions.UPDATE_TAGS, tags)
  }

  async getTags(): Promise<Tag[]> {
    const data = await this.sendToBackgroundService(Actions.GET_TAGS, null)
    return data as unknown as Tag[]
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

  async executeCommand(command: string, params: string) {
    await this.sendToBackgroundService(command, params)
  }

  private sendToBackgroundService(action: string, data?: any) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({action, data}, (response) => {
        resolve(response)
      })
    })
  }
}
