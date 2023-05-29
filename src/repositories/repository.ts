import DomainRule from "../entities/domain-rule"

export default class Repository {
    private DOMAIN_RULES_TABLE_NAME = 'domain-rules'

    async updateDomainRules(domainRules: DomainRule[]){
        await chrome.storage.sync.set({
            [this.DOMAIN_RULES_TABLE_NAME]: domainRules,
        })
        await this.getDomainRules()
    }

    async getDomainRules(): Promise<DomainRule[]> {
        const data = await chrome.storage.sync.get([ this.DOMAIN_RULES_TABLE_NAME ])
        return data[this.DOMAIN_RULES_TABLE_NAME] as unknown as DomainRule[]
    }
}