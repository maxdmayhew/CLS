browser.browserAction.onClicked.addListener((tab) => {
	browser.tabs.executeScript(
		tab.id,
		{ code: 'localStorage.clear(); console.log("Local storage cleared.");' }
	);
});
