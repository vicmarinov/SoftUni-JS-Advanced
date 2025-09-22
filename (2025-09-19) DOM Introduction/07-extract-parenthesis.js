function extractTextFromParenthesis (elementID) {
    let text = document.getElementById(elementID).textContent;

    let regExpr = /\((?<textInParenthesis>[^\(\)]+)\)/gm;
    let textInParenthesisArr = [];

    for (let match of text.matchAll(regExpr)) {
        textInParenthesisArr.push(match.groups.textInParenthesis);
    }

    return textInParenthesisArr.join('; ');
}