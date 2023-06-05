import Actions from '../actions'
import ExtractTabsByTagController from '../controllers/messages-controller/extract-tabs-by-tag-controller'
import ExtractTabsController from '../controllers/messages-controller/extract-tabs-controller'
import GetCommandsController from '../controllers/messages-controller/get-commands-controller'
import GetDomainRulesController from '../controllers/messages-controller/get-domain-rules-controller'
import GetTagsController from '../controllers/messages-controller/get-tags-controller'
import GroupTabsByDomainController from '../controllers/messages-controller/group-tabs-by-domain-controller'
import {
  Context,
  MessagesController,
} from '../controllers/messages-controller/messages-controller'
import SortByUrlServiceController from '../controllers/messages-controller/sort-by-url-service-controller'
import UngroupTabsController from '../controllers/messages-controller/ungroup-tabs-controller'
import UpdateDomainRulesController from '../controllers/messages-controller/update-domain-rules-controller'
import UpdateTagsController from '../controllers/messages-controller/update-tags-controller'

export default class ChromeListenerForMessages {
  private static controllers: Record<string, MessagesController> = {
    [Actions.UPDATE_DOMAIN_RULES]: new UpdateDomainRulesController(),
    [Actions.GET_DOMAIN_RULES]: new GetDomainRulesController(),
    [Actions.GROUP_TABS_BY_DOMAIN]: new GroupTabsByDomainController(),
    [Actions.SORT_TABS_BY_DOMAIN]: new SortByUrlServiceController(),
    [Actions.UNGROUP_TABS]: new UngroupTabsController(),
    [Actions.GET_COMMANDS]: new GetCommandsController(),
    [Actions.EXTRACT_TABS]: new ExtractTabsController(),
    [Actions.UPDATE_TAGS]: new UpdateTagsController(),
    [Actions.GET_TAGS]: new GetTagsController(),
    [Actions.EXTRACT_TABS_BY_TAG]: new ExtractTabsByTagController(),
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
}
