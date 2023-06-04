import DomainRule from '../entities/domain-rule'
import Repository from '../repositories/repository'
import {getDomainFromURL} from '../utils/get-domain-from-url'

export default class ExtractTabsService {
  private repository = new Repository()
  private domainRules: DomainRule[] = []

  async execute({domains}: ExtractTabsRequest) {
    this.domainRules = await this.repository.getDomainRules()
    const tabs = await chrome.tabs.query({currentWindow: true})
    const selectedTabs = tabs.filter((tab) => {
      const domain = getDomainFromURL(tab.url || '')
      const domainRule = this.domainRules.find(
        (domainRule) => domainRule.domain === domain
      )
      return (
        (domainRule && domains.includes(domainRule.title)) ||
        domains.includes(domain)
      )
    })
    this.createWindow(selectedTabs)
  }

  private createWindow(selectedTabs: chrome.tabs.Tab[]) {
    const [first, ...rest] = selectedTabs
    chrome.windows.create(
      {
        tabId: first.id,
        focused: true,
      },
      (window) => {
        rest.forEach((tab, index) =>
          this.moveTab(tab.id!, window!.id!, index + 1)
        )
      }
    )
  }

  private moveTab(tabId: number, windowId: number, index: number) {
    chrome.tabs.move(tabId, {windowId, index})
  }
}

export type ExtractTabsRequest = {
  domains: string[]
}
