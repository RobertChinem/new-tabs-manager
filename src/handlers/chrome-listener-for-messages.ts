import Actions from '../actions'
import AddTagToCurrentTabController from '../controllers/messages-controller/add-tag-to-current-tab-controller'
import ExtractTabsByTagController from '../controllers/messages-controller/extract-tabs-by-tag-controller'
import ExtractTabsController from '../controllers/messages-controller/extract-tabs-controller'
import GetCommandsController from '../controllers/messages-controller/get-commands-controller'
import GetDomainRulesController from '../controllers/messages-controller/get-domain-rules-controller'
import GetTagsController from '../controllers/messages-controller/get-tags-controller'
import GroupTabsByDomainController from '../controllers/messages-controller/group-tabs-by-domain-controller'
import MergeAllTabsController from '../controllers/messages-controller/merge-all-tabs-controller'
import {
  Context,
  MessagesController,
} from '../controllers/messages-controller/messages-controller'
import OpenAndExtractTabsByTagController from '../controllers/messages-controller/open-and-extract-tabs-by-tag-controller'
import SortByUrlServiceController from '../controllers/messages-controller/sort-by-url-service-controller'
import UngroupTabsController from '../controllers/messages-controller/ungroup-tabs-controller'
import UpdateDomainRulesController from '../controllers/messages-controller/update-domain-rules-controller'
import UpdateTagsController from '../controllers/messages-controller/update-tags-controller'

export default class ChromeListenerForMessages {
  private static controllers: Record<string, MessagesController> = {
    ...ChromeListenerForMessages.getControllersForData(),
    ...ChromeListenerForMessages.getControllersForCommands(),
  }

  init() {
    chrome.runtime.onMessage.addListener(
      (request: Context['request'], sender, sendResponse) => {
        const controller = ChromeListenerForMessages.controllers[request.action]
        if (controller) controller.execute({request, sender, sendResponse})
        return true
      }
    )
  }

  private static getControllersForCommands(): Record<
    string,
    MessagesController
  > {
    return {
      [Actions.GROUP_TABS_BY_DOMAIN]: new GroupTabsByDomainController(),
      [Actions.SORT_TABS_BY_DOMAIN]: new SortByUrlServiceController(),
      [Actions.UNGROUP_TABS]: new UngroupTabsController(),
      [Actions.EXTRACT_TABS]: new ExtractTabsController(),
      [Actions.EXTRACT_TABS_BY_TAG]: new ExtractTabsByTagController(),
      [Actions.MERGE_ALL_TABS]: new MergeAllTabsController(),
    }
  }

  private static getControllersForData(): Record<string, MessagesController> {
    return {
      [Actions.UPDATE_DOMAIN_RULES]: new UpdateDomainRulesController(),
      [Actions.GET_DOMAIN_RULES]: new GetDomainRulesController(),
      [Actions.GET_COMMANDS]: new GetCommandsController(),
      [Actions.UPDATE_TAGS]: new UpdateTagsController(),
      [Actions.GET_TAGS]: new GetTagsController(),
      [Actions.OPEN_AND_EXTRACT_TABS_BY_TAG]:
        new OpenAndExtractTabsByTagController(),
      [Actions.ADD_TAG_TO_CURRENT_TAB]: new AddTagToCurrentTabController(),
    }
  }
}
