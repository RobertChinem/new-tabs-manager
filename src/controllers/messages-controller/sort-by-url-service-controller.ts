import SortByURLService from '../../services/sort-by-url-service'
import {MessagesController} from './messages-controller'

export default class SortByUrlServiceController extends MessagesController {
  private service = new SortByURLService()

  async execute() {
    await this.service.execute()
  }
}
