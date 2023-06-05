import Tag from '../entities/tag'
import Repository from '../repositories/repository'

export default class OpenAndExtractTabsByTagService {
  private repository = new Repository()
  private tags: Tag[] = []

  async execute({tagName}: OpenAndExtractTabsByTagRequest) {
    this.tags = await this.repository.getTags()
    const tag = this.tags.find((t) => t.name === tagName)
    const tabsToExtract = await this.getTabsToExtract(tag)
    const tabsToOpen = await this.getTabsToOpen(tabsToExtract, tag)
    this.createWindow(tabsToExtract, tabsToOpen)
  }

  private createWindow(tabsToExtract: chrome.tabs.Tab[], tabsToOpen: string[]) {
    chrome.windows.create(
      {
        focused: true,
        url: tabsToOpen,
      },
      (window) => {
        tabsToExtract.forEach((tab, index) =>
          this.moveTab(tab.id!, window!.id!, index + 1)
        )
      }
    )
  }

  private moveTab(tabId: number, windowId: number, index: number) {
    chrome.tabs.move(tabId, {windowId, index})
  }

  private async getTabsToOpen(tabsToExtract: chrome.tabs.Tab[], tag?: Tag) {
    if (!tag) {
      return []
    }
    const urlsToExtract = tabsToExtract.map((tab) => tab.url || '')
    return tag.urls.filter((url) => !urlsToExtract.includes(url))
  }

  private async getTabsToExtract(tagToExtract?: Tag) {
    if (!tagToExtract) {
      return []
    }
    const tabs = await chrome.tabs.query({})
    return tabs.filter((tab) => {
      return tagToExtract.urls.includes(tab.url || '')
    })
  }
}

export type OpenAndExtractTabsByTagRequest = {
  tagName: string
}
