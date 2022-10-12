chrome.runtime.onMessage.addListener(function (message) {
  if (message.name === 'panel') {
    if (message.content) {
      var data = JSON.parse(message.content)
      chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        // let url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {type: 'sendData', data: data})
      });

    }
  }
})