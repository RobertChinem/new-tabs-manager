import Actions from "../actions"
import GetDomainRulesController from "../controllers/messages-controller/get-domain-rules-controller"
import { Context, MessagesController } from "../controllers/messages-controller/messages-controller"
import UpdateDomainRulesController from "../controllers/messages-controller/update-domain-rules-controller"

export default class ChromeListenerForMessages {
    private static services: Record<string, MessagesController> = {
        [Actions.UPDATE_DOMAIN_RULES]: new UpdateDomainRulesController(),
        [Actions.GET_DOMAIN_RULES]: new GetDomainRulesController(),
    }

    init(){
        chrome.runtime.onMessage.addListener((request: Context['request'], sender, sendResponse) => {
            const service = ChromeListenerForMessages.services[request.action]
            if(service) service.execute({ request, sender, sendResponse })
            return true
        })
    }
}
