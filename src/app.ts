import ChromeListenerForMessages from './handlers/chrome-listener-for-messages'

export default class App {
  private chromeListenerForMessages = new ChromeListenerForMessages()

  init() {
    this.chromeListenerForMessages.init()
  }
}
