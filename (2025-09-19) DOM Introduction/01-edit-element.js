function editElement (element, strMatch, strReplacer) {
    element.textContent = element
        .textContent
        .replaceAll(strMatch, strReplacer);
}