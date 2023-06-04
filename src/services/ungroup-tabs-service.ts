export default class UngroupTabsService {
  async execute() {
    const tabs = await chrome.tabs.query({currentWindow: true})
    tabs.forEach(this.ungroupTab)
  }

  private ungroupTab(tab: chrome.tabs.Tab) {
    chrome.tabs.ungroup(tab.id as number)
  }
}
