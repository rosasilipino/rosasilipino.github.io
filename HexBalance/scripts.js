function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const textToCopy = codeElement.innerText || codeElement.textContent;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
