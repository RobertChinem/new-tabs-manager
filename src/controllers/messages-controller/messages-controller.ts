import Request from '../../entities/request'

export type Context = {
  request: Request
  sender: chrome.runtime.MessageSender
  sendResponse: (response: any) => void
}

export abstract class MessagesController {
  abstract execute(context: Context): Promise<void>
}
