import Actions from '../actions'
import Command from '../entities/command'

export default class GetCommandsService {
  async execute(): Promise<Command[]> {
    const commands: Command[] = [
      this.getCommandForGroupTabsByDomain(),
      this.getCommandForUngroupTabs(),
      this.getCommandForSortTabsByDomain(),
      this.getCommandForExtractTabs(),
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
}
