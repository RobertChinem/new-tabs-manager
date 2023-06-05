export default class MergeAllTabsService {
  async execute() {
    const allTabs = await chrome.tabs.query({})
    const [first, ...rest] = allTabs

    chrome.windows.create({tabId: first.id, focused: true}, (window) => {
      rest.forEach((tab) => {
        chrome.tabs.move(tab.id!, {windowId: window!.id!, index: -1})
      })
    })
  }
}
