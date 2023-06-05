import Actions from '../actions'
import Command from '../entities/command'

export default class GetCommandsService {
  async execute(): Promise<Command[]> {
    const commands: Command[] = [
      this.getCommandForGroupTabsByDomain(),
      this.getCommandForUngroupTabs(),
      this.getCommandForSortTabsByDomain(),
      this.getCommandForExtractTabs(),
      this.getCommandForExtractTabsByTag(),
      this.getCommandForOpenAndExtractTabsByTag(),
      this.getCommandForAddTagToCurrentTab(),
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

  private getCommandForExtractTabs(): Command {
    return {
      action: Actions.EXTRACT_TABS,
      description: 'Extract tabs',
      hint: 'd1,d2,d3...',
    }
  }

  private getCommandForExtractTabsByTag(): Command {
    return {
      action: Actions.EXTRACT_TABS_BY_TAG,
      description: 'Extract tabs by tag',
      hint: 'tag',
    }
  }

  private getCommandForOpenAndExtractTabsByTag(): Command {
    return {
      action: Actions.OPEN_AND_EXTRACT_TABS_BY_TAG,
      description: 'Open and extract tabs by tag',
      hint: 'tag',
    }
  }

  private getCommandForAddTagToCurrentTab(): Command {
    return {
      action: Actions.ADD_TAG_TO_CURRENT_TAB,
      description: 'Add tag to current tab',
      hint: 'tag',
    }
  }

  private getCommandForMergeAllTabs(): Command {
    return {
      action: Actions.MERGE_ALL_TABS,
      description: 'Merge all tabs',
    }
  }
}
