export default class SortByURLService {
    async execute() {
        const tabs = await chrome.tabs.query({ currentWindow: true })
        tabs.sort(this.compareTabs)
            .forEach(this.moveTab)
    }

    private compareTabs(a: chrome.tabs.Tab, b: chrome.tabs.Tab): number {
        const urlA = a.url || ''
        const urlB = b.url || ''
        if(urlA < urlB) return -1
        if(urlA > urlB) return 1
        return 0
    }

    private moveTab(tab: chrome.tabs.Tab, index: number) {
        chrome.tabs.move(tab.id as number, { index })
    }
}
