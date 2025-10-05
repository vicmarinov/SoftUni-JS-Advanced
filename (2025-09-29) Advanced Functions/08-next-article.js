function getArticleGenerator (articles) {
    const articlesArr = articles.slice();
    let currentArticleIdx = 0;

    const articlesContainer = document.getElementById('content');

    return function showNextArticle () {
        if (currentArticleIdx === articlesArr.length) return;

        const articleElement = document.createElement('article');
        articleElement.textContent = articlesArr[currentArticleIdx++];
        articlesContainer.append(articleElement);
    }
}