chrome.runtime.onMessage.addListener(function (message) {
  alert(`名称： ${message.data.data.title}, 包名：${message.data.data.identifier}`)
})