import Component from "../component"

export default class Heading implements Component {
    private text: string
    private type: 'h1' | 'h2' | 'h3'

    constructor({ text, type }: Props) {
        this.text = text
        this.type = type
    }

    render(): HTMLElement {
        const heading = document.createElement(this.type)
        heading.innerText = this.text
        return heading
    }
}

type Props = {
    text: string
    type: 'h1' | 'h2' | 'h3'
}