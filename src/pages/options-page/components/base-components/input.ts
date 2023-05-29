import Component from "../component"

export default class Input implements Component {
    private value: string
    private onChange: (value: string) => void

    constructor({ value, onChange }: Props){
        this.value = value
        this.onChange = onChange
    }

    render(): HTMLElement {
        const input = document.createElement("input")
        input.type = "text"
        input.value = this.value
        input.addEventListener("input", (event) => {
            const target = event.target as HTMLInputElement
            this.onChange(target.value)
        })
        return input
    }
}

type Props = {
    value: string
    onChange: (value: string) => void
}
