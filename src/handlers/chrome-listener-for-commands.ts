import Commands from "../commands"
import CommandsController from "../controllers/commands-controller/commands-controller"
import GroupTabsByDomainController from "../controllers/commands-controller/group-tabs-by-domain-controller"
import SortByUrlServiceController from "../controllers/commands-controller/sort-by-url-service-controller"
import UngroupTabsController from "../controllers/commands-controller/ungroup-tabs-controller"

export default class ChromeListenerForCommands {
    private static services: Record<string, CommandsController> = {
        [Commands.GROUP_BY_DOMAIN]: new GroupTabsByDomainController(),
        [Commands.UNGROUP_TABS]: new UngroupTabsController(),
        [Commands.SORT_BY_URL]: new SortByUrlServiceController(),
    }

    init(){
        chrome.commands.onCommand.addListener((command) => {
            const service = ChromeListenerForCommands.services[command]
            if(service) service.execute()
        })
    }
}
