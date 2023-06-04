import Actions from '../actions'
import Command from '../entities/command'

export default class GetCommandsService {
  async execute(): Promise<Command[]> {
    const commands: Command[] = [
      this.getCommandForGroupTabsByDomain(),
      this.getCommandForUngroupTabs(),
      this.getCommandForSortTabsByDomain(),
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
}
