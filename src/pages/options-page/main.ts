import App from "./components/app"


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("main-view")
    const app = new App(root as HTMLElement)
    app.init()
})