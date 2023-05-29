import Component from "../component"

export default class Container implements Component {
    private children: Component[] = []

    constructor({ children }: Props) {
        this.children = children
    }

    render(): HTMLElement {
        const div = document.createElement("div")
        this.children.forEach(child => {
            div.appendChild(child.render())
        })
        return div
    }
}

type Props = {
    children: Component[]
}