document.getElementById('clear').addEventListener('click', () => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        browser.tabs.executeScript(
            tabs[0].id,
            { code: 'localStorage.clear(); alert("Local storage cleared.");' }
        );
    });
});
