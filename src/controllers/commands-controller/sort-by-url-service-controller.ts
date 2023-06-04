import SortByURLService from "../../services/sort-by-url-service"
import CommandsController from "./commands-controller"

export default class SortByUrlServiceController extends CommandsController {
    private service = new SortByURLService()

    async execute() {
        await this.service.execute()
    }
}
