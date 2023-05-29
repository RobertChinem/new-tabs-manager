import Component from "../component"

export default class Button implements Component {
    private text: string
    private onClick: () => void

    constructor({ text, onClick }: Props) {
        this.text = text
        this.onClick = onClick
    }

    render(): HTMLElement {
        const button = document.createElement("button")
        button.innerText = this.text
        button.addEventListener("click", this.onClick)
        return button
    }
}
type Props = {
    text: string
    onClick: () => void
}