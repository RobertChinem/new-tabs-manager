import DomainRule from '../entities/domain-rule'
import Request from '../entities/request'
import Tag from '../entities/tag'
import {AddTagToCurrentTabRequest} from '../services/add-tag-to-current-tab-service'
import {ExtractTabsByTagRequest} from '../services/extract-tabs-by-tag-service'
import {ExtractTabsRequest} from '../services/extract-tabs-service'
import {OpenAndExtractTabsByTagRequest} from '../services/open-and-extract-tabs-by-tag-service'
import {UpdateTagsRequest} from '../services/update-tags-service'

export default class RequestMapper {
  toDomainRules({data}: Request): DomainRule[] {
    if (!data) throw new Error('Request data is empty')
    if (!Array.isArray(data)) throw new Error('Request data is not an array')
    return data.map((item) => this.toDomainRule(item))
  }

  toExtractTabsRequest({data}: Request): ExtractTabsRequest {
    if (!data) throw new Error('Request data is empty')
    const domainsStr = this.toString(data)
    return {
      domains: domainsStr.split(','),
    }
  }

  toUpdateTagsRequest({data}: Request): UpdateTagsRequest {
    if (!data) throw new Error('Request data is empty')
    if (!Array.isArray(data)) throw new Error('Request data is not an array')
    return {
      tags: data.map((item) => this.toTag(item)),
    }
  }

  toExtractTabsByTagRequest({data}: Request): ExtractTabsByTagRequest {
    if (!data) throw new Error('Request data is empty')
    return {
      tagName: this.toString(data),
    }
  }

  toOpenAndExtractTabsByTagRequest({
    data,
  }: Request): OpenAndExtractTabsByTagRequest {
    if (!data) throw new Error('Request data is empty')
    return {
      tagName: this.toString(data),
    }
  }

  toAddTagToCurrentTabRequest({data}: Request): AddTagToCurrentTabRequest {
    if (!data) throw new Error('Request data is empty')
    return {
      tagName: this.toString(data),
    }
  }

  private toTag(data: any): Tag {
    return {
      name: this.toString(data.name),
      urls: this.toStringArray(data.urls),
    }
  }

  private toStringArray(data: any): string[] {
    if (!data) throw new Error('Data is empty')
    if (!Array.isArray(data)) throw new Error('Data is not an array')
    return data.map((item) => this.toString(item))
  }

  private toDomainRule(data: any): DomainRule {
    return new DomainRule(this.toString(data.domain), this.toString(data.title))
  }

  private toString(data: any): string {
    if (!data || typeof data !== 'string')
      throw new Error('Data is not a string')
    return data
  }
}
