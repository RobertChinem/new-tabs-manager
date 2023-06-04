import {getDomainFromURL} from '../utils/get-domain-from-url'

export default class ExtractTabsService {
  async execute({domains}: ExtractTabsRequest) {
    const tabs = await chrome.tabs.query({currentWindow: true})
    const selectedTabs = tabs.filter((tab) => {
      const domain = getDomainFromURL(tab.url || '')
      return domains.includes(domain)
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
