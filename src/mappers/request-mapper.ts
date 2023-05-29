import DomainRule from "../entities/domain-rule"
import Request from "../entities/request"


export default class RequestMapper {
    toDomainRules({ data }: Request): DomainRule[] {
        if(!data) throw new Error("Request data is empty")
        if(!Array.isArray(data)) throw new Error("Request data is not an array")
        return data.map(item => this.toDomainRule(item))
    }

    private toDomainRule(data: any): DomainRule {
        return new DomainRule(
            this.toString(data.domain),
            this.toString(data.title))
    }

    private toString(data: any): string {
        if(!data || typeof data !== "string") throw new Error("Data is not a string")
        return data
    }
}
