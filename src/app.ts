import ChromeListenerForCommands from './handlers/chrome-listener-for-commands'
import ChromeListenerForMessages from './handlers/chrome-listener-for-messages'

export default class App {
  private chromeListenerForCommands = new ChromeListenerForCommands()
  private chromeListenerForMessages = new ChromeListenerForMessages()

  init() {
    this.chromeListenerForCommands.init()
    this.chromeListenerForMessages.init()
  }
}
