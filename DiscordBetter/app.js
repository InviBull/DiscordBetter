const docObserver = new MutationObserver(() => {
    const blockedMessages = document.body.getElementsByClassName("blockedSystemMessage-3FmE9n container-x059i8 cozy-S5wsfF")
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