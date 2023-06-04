import UngroupTabsService from "../../services/ungroup-tabs-service"
import { MessagesController } from "./messages-controller"

export default class UngroupTabsController extends MessagesController {
    private service = new UngroupTabsService()

    async execute() {
        await this.service.execute()
    }
}
