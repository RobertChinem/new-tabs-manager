import Repository from '../repositories/repository'

export default class AddTagToCurrentTabService {
  private repository = new Repository()

  async execute({tagName}: AddTagToCurrentTabRequest) {
    const allTags = await this.repository.getTags()
    const tab = await this.getCurrentTab()
    const url = tab.url || ''
    if (!allTags.some((t) => t.name === tagName)) {
      allTags.push({name: tagName, urls: []})
    }
    const tag = allTags.find((t) => t.name === tagName)!
    if (!tag.urls.includes(url)) {
      tag.urls.push(url)
    }
    await this.repository.updateTags(allTags)
  }

  private async getCurrentTab() {
    const result = await chrome.tabs.query({active: true, currentWindow: true})
    return result[0]
  }
}

export type AddTagToCurrentTabRequest = {
  tagName: string
}
