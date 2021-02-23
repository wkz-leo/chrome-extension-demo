
function getDOMbyId(id) {
    return document.getElementById(id)
}


// 访问bg的函数

var $keyWord = getDOMbyId('keyWord')
var $pages = getDOMbyId('pages')
var $num = getDOMbyId('num')
var $confirm = getDOMbyId('confirm')
var $clickSearch = getDOMbyId('clickSearch')
$confirm.onclick = function () {
    var bg = chrome.extension.getBackgroundPage();
    bg.test();
    // alert($keyWord.value + $pages.value + $num.value)
}

// 获取当前选项卡ID
function getCurrentTabId(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (callback) callback(tabs.length ? tabs[0].id : null);
    });
}

// 向content-script注入JS片段
function executeScriptToCurrentTab(code) {
    getCurrentTabId((tabId) => {
        chrome.tabs.executeScript(tabId, { code: code });
    });
}


$('#clickSearch').click(() => {
    executeScriptToCurrentTab(`$('#nav-search input[type=submit]').click()`)
});