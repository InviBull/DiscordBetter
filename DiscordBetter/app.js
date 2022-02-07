const docObserver = new MutationObserver(() => {
    const blockedMessages = document.querySelectorAll('[class^="blockedSystemMessage-"]');
    if (blockedMessages) {
        Array.from(blockedMessages).forEach(element => {
            element.parentElement.parentElement.style.display = 'none';
        });
    }
})

setTimeout(
    docObserver.observe(document.body, {
        childList: true,
        subtree: true,
    }),
1000);