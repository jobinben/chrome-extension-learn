chrome.runtime.onInstalled.addListener(() => {
    console.log('chrome extension installed!!');
});

chrome.bookmarks.onChanged.addListener(() => {
    alert('bookmark be created!');
});
