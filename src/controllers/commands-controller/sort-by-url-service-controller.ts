import SortByURLService from "../../services/sort-by-url-service"
import Controller from "./commands-controller"

export default class SortByUrlServiceController extends Controller {
    private service = new SortByURLService()

    async execute() {
        await this.service.execute()
    }
}
