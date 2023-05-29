import Actions from "../../actions"
import DomainRule from "./models/domain-rule"

export default class Gateway {
    async saveDomainRules(domainRules: DomainRule[]) {
        await this.sendToBackgroundService(Actions.UPDATE_DOMAIN_RULES, domainRules)
    }

    async getDomainRules(): Promise<DomainRule[]> {
        const data = await this.sendToBackgroundService(Actions.GET_DOMAIN_RULES, null)
        return data as unknown as DomainRule[]
    }

    private sendToBackgroundService(action: string, data?: any){
        return new Promise((resolve) => {
            chrome.runtime.sendMessage({ action, data }, (response) => {
               resolve(response)
            })
        })
    }
}
