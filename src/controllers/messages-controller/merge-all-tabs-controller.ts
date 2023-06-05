import MergeAllTabsService from '../../services/merge-all-tabs-service'
import {MessagesController} from './messages-controller'

export default class MergeAllTabsController extends MessagesController {
  private service = new MergeAllTabsService()

  async execute() {
    this.service.execute()
  }
}
