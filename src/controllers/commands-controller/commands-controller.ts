export default abstract class CommandsController {
    abstract execute(): Promise<void>
}