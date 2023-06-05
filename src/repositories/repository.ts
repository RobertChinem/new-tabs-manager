import DomainRule from '../entities/domain-rule'
import Tag from '../entities/tag'

export default class Repository {
  private DOMAIN_RULES_TABLE_NAME = 'domain-rules'
  private TAGS_TABLE_NAME = 'tags'

  async updateDomainRules(domainRules: DomainRule[]) {
    await chrome.storage.sync.set({
      [this.DOMAIN_RULES_TABLE_NAME]: domainRules,
    })
  }

  async getDomainRules(): Promise<DomainRule[]> {
    const data = await chrome.storage.sync.get([this.DOMAIN_RULES_TABLE_NAME])
    return data[this.DOMAIN_RULES_TABLE_NAME] as unknown as DomainRule[]
  }

  async updateTags(tags: Tag[]) {
    await chrome.storage.sync.set({
      [this.TAGS_TABLE_NAME]: tags,
    })
  }

  async getTags(): Promise<Tag[]> {
    const data = await chrome.storage.sync.get([this.TAGS_TABLE_NAME])
    return data[this.TAGS_TABLE_NAME] as unknown as Tag[]
  }
}
