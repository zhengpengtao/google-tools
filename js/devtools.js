chrome.devtools.network.onRequestFinished.addListener(
  function(request) {
			request.getContent(function (content) {
				if (request.request.url.includes('https://www.taptap.com/webapiv2/app/v2/detail-by-id')) {
					chrome.runtime.sendMessage({
						name: 'panel',
						tabId: chrome.devtools.inspectedWindow.tabId,
						content: content
					})
				}
			})
});