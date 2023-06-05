import Tag from '../entities/tag'
import Repository from '../repositories/repository'

export default class ExtractTabsByTagService {
  private repository = new Repository()
  private tags: Tag[] = []

  async execute({tagName}: ExtractTabsByTagRequest) {
    this.tags = await this.repository.getTags()
    const tagToExtract = this.tags.find((t) => t.name === tagName)
    const tabsToExtract = await this.getTabsToExtract(tagToExtract)
    this.createWindow(tabsToExtract)
  }

  private createWindow(tabsToExtract: chrome.tabs.Tab[]) {
    const [first, ...rest] = tabsToExtract
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

  private async getTabsToExtract(tagToExtract?: Tag) {
    if (!tagToExtract) {
      return []
    }
    const tabs = await chrome.tabs.query({})
    return tabs.filter((tab) => {
      const urlWithoutQueryParams = this.getURLWithoutQueryParams(tab.url)
      return tagToExtract.urls
        .map((url) => this.getURLWithoutQueryParams(url))
        .includes(urlWithoutQueryParams)
    })
  }

  private getURLWithoutQueryParams(url?: string) {
    if (!url) {
      return ''
    }
    return url.split('?')[0]
  }
}

export type ExtractTabsByTagRequest = {
  tagName: string
}
