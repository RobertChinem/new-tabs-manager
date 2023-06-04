import DomainRule from '../entities/domain-rule'
import Repository from '../repositories/repository'
import {getDomainFromURL} from '../utils/get-domain-from-url'

export default class GroupTabsByDomainService {
  private repository = new Repository()
  private domainRules: DomainRule[] = []

  async execute() {
    this.domainRules = await this.repository.getDomainRules()
    const tabs = await chrome.tabs.query({currentWindow: true})
    const groups = this.groupTabsByDomain(tabs)

    for (const [domain, tabs] of Object.entries(groups)) {
      chrome.tabs.group(
        {tabIds: tabs.map((tab) => tab.id as number)},
        (groupId) => this.updateGroupTitle(groupId, domain)
      )
    }
  }

  async updateGroupTitle(groupId: number, domain: string) {
    const domainRule = this.domainRules.find(
      (domainRule) => domainRule.domain === domain
    )
    const title = domainRule ? domainRule.title : domain
    chrome.tabGroups.update(groupId, {title, collapsed: true})
  }

  private groupTabsByDomain(tabs: chrome.tabs.Tab[]) {
    return tabs.reduce((acc, tab) => {
      const domain = getDomainFromURL(tab.url || '')
      if (!acc[domain]) {
        acc[domain] = []
      }
      acc[domain].push(tab)
      return acc
    }, {} as Record<string, chrome.tabs.Tab[]>)
  }
}
