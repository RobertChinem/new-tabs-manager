import Actions from "../actions"
import GetCommandsController from "../controllers/messages-controller/get-commands-controller"
import GetDomainRulesController from "../controllers/messages-controller/get-domain-rules-controller"
import GroupTabsByDomainController from "../controllers/messages-controller/group-tabs-by-domain-controller"
import { Context, MessagesController } from "../controllers/messages-controller/messages-controller"
import SortByUrlServiceController from "../controllers/messages-controller/sort-by-url-service-controller"
import UngroupTabsController from "../controllers/messages-controller/ungroup-tabs-controller"
import UpdateDomainRulesController from "../controllers/messages-controller/update-domain-rules-controller"

export default class ChromeListenerForMessages {
    private static services: Record<string, MessagesController> = {
        [Actions.UPDATE_DOMAIN_RULES]: new UpdateDomainRulesController(),
        [Actions.GET_DOMAIN_RULES]: new GetDomainRulesController(),
        [Actions.GROUP_TABS_BY_DOMAIN]: new GroupTabsByDomainController(),
        [Actions.SORT_TABS_BY_DOMAIN]: new SortByUrlServiceController(),
        [Actions.UNGROUP_TABS]: new UngroupTabsController(),
        [Actions.GET_COMMANDS]: new GetCommandsController(),
    }

    init() {
        chrome.runtime.onMessage.addListener((request: Context['request'], sender, sendResponse) => {
            const service = ChromeListenerForMessages.services[request.action]
            if (service) service.execute({ request, sender, sendResponse })
            return true
        })
    }
}
