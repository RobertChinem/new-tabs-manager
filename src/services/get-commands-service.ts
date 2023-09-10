import Actions from '../actions'
import Command from '../entities/command'
import Repository from '../repositories/repository'
import {getDomainFromURL} from '../utils/get-domain-from-url'

export default class GetCommandsService {
  private repository = new Repository()

  async execute(): Promise<Command[]> {
    const commands: Command[] = [
      this.getCommandForGroupTabsByDomain(),
      this.getCommandForUngroupTabs(),
      this.getCommandForSortTabsByDomain(),
      await this.getCommandForExtractTabs(),
      await this.getCommandForExtractTabsByTag(),
      await this.getCommandForOpenAndExtractTabsByTag(),
      await this.getCommandForAddTagToCurrentTab(),
      this.getCommandForMergeAllTabs(),
    ]
    return commands
  }

  private getCommandForGroupTabsByDomain(): Command {
    return {
      action: Actions.GROUP_TABS_BY_DOMAIN,
      description: 'Group tabs by domain',
    }
  }

  private getCommandForUngroupTabs(): Command {
    return {
      action: Actions.UNGROUP_TABS,
      description: 'Ungroup tabs',
    }
  }

  private getCommandForSortTabsByDomain(): Command {
    return {
      action: Actions.SORT_TABS_BY_DOMAIN,
      description: 'Sort tabs by domain',
    }
  }

  private async getCommandForExtractTabs(): Promise<Command> {
    const domainRules = await this.repository.getDomainRules()
    const tabs = await chrome.tabs.query({currentWindow: true})
    const domains = tabs.map((tab) => getDomainFromURL(tab.url || ''))
    return {
      action: Actions.EXTRACT_TABS,
      description: 'Extract tabs',
      hint: 'd1,d2,d3...',
      datalist: [
        ...domains,
        ...domainRules.map((domainRule) => domainRule.domain),
        ...domainRules.map((domainRule) => domainRule.title),
      ],
    }
  }

  private async getCommandForExtractTabsByTag(): Promise<Command> {
    const tags = await this.repository.getTags()
    return {
      action: Actions.EXTRACT_TABS_BY_TAG,
      description: 'Extract tabs by tag',
      hint: 'tag',
      datalist: tags.map((tag) => tag.name),
    }
  }

  private async getCommandForOpenAndExtractTabsByTag(): Promise<Command> {
    const tags = await this.repository.getTags()
    return {
      action: Actions.OPEN_AND_EXTRACT_TABS_BY_TAG,
      description: 'Open and extract tabs by tag',
      hint: 'tag',
      datalist: tags.map((tag) => tag.name),
    }
  }

  private async getCommandForAddTagToCurrentTab(): Promise<Command> {
    const tags = await this.repository.getTags()
    return {
      action: Actions.ADD_TAG_TO_CURRENT_TAB,
      description: 'Add tag to current tab',
      hint: 'tag',
      datalist: tags.map((tag) => tag.name),
    }
  }

  private getCommandForMergeAllTabs(): Command {
    return {
      action: Actions.MERGE_ALL_TABS,
      description: 'Merge all tabs',
    }
  }
}
