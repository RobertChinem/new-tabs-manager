import Gateway from "../gateway"
import DomainRule from "../models/domain-rule"
import Button from "./base-components/button"
import Container from "./base-components/container"
import Heading from "./base-components/heading"
import Input from "./base-components/input"
import Component from "./component"


class AppState {
    readonly domainRules: DomainRule[] = []

    createBlankDomainRule() {
        this.domainRules.push({ domain: "", title: "" })
    }

    updateDomainRule(index: number, domainRule: DomainRule) {
        this.domainRules[index] = domainRule
    }

    deleteDomainRule(index: number) {
        this.domainRules.splice(index, 1)
    }
}   

export default class App {
    private root: HTMLElement
    private state = new AppState()
    private gateway = new Gateway()

    constructor(root: HTMLElement){
        this.root = root
    }

    init() {
        this.gateway.getDomainRules().then((domainRules) => {
            this.state.domainRules.push(...domainRules)
            this.refresh()
        })
    }

    private buildLayout(): Component {
        return new Container({
            children: [
                new Heading({ type: "h1", text: "Options Page" }),
                new Container({
                    children: [
                        ...this.state.domainRules.map((domainRule, index) => {
                            return new Container({
                                children: [
                                    new Input({ 
                                        value: domainRule.domain,
                                        onChange: (value) => {
                                            this.handleUpdateDomainRule(index, { domain: value })
                                        },
                                    }),
                                    new Input({ 
                                        value: domainRule.title,
                                        onChange: (value) => {
                                            this.handleUpdateDomainRule(index, { title: value })
                                        },
                                    }),
                                    new Button({ 
                                        text: "Delete", 
                                        onClick: () => this.handleDeleteRuleClick(index),
                                    }),
                                ]
                            })
                        }),
                    ]
                }),
                new Container({
                    children: [
                        new Button({ 
                            text: "Add new rule", 
                            onClick: () => {
                                this.handleAddNewRuleClick()
                            }
                        }),
                        new Button({ 
                            text: "Save changes", 
                            onClick: () => {
                                this.handleSaveChangesClick()
                            },
                        }),
                    ]
                }),
            ]
        })
    }

    private refresh(){
        this.root.innerHTML = ""
        this.root.appendChild(this.buildLayout().render())
    }

    private handleAddNewRuleClick() {
        this.state.createBlankDomainRule()
        this.refresh()
    }

    private handleSaveChangesClick() {
        this.gateway.saveDomainRules(this.state.domainRules)
    }

    private handleDeleteRuleClick(index: number) {
        this.state.deleteDomainRule(index)
        this.refresh()
    }

    private handleUpdateDomainRule(index: number, data: { domain?: string, title?: string }) {
        const domainRule = this.state.domainRules[index]
        if (data.domain) {
            domainRule.domain = data.domain
        }
        if (data.title) {
            domainRule.title = data.title
        }
        this.state.updateDomainRule(index, domainRule)
    }
}