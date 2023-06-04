export default class Request {
  public action: string
  public data: any

  constructor(action: string, data: any) {
    this.action = action
    this.data = data
  }
}
