function solve () {
    const addBtnsArr = Array.from(document.getElementsByClassName('add-product'));
    addBtnsArr.forEach(btn => btn.addEventListener('click', addProduct));

    const checkoutBtn = document.getElementsByClassName('checkout')[0];
    checkoutBtn.addEventListener('click', checkoutOrder);

    const outputField = document.querySelector('.shopping-cart textarea');

    const productsOrdered = [];

    function addProduct (event) {
        const btnClicked = event.currentTarget;

        const productElement = btnClicked.parentElement.parentElement;
        const productName = productElement.getElementsByClassName('product-title')[0].textContent;
        const productPrice = Number(productElement.getElementsByClassName('product-line-price')[0].textContent);

        const product = createProductOrdered(productName, productPrice);
        productsOrdered.push(product);

        outputField.textContent += `Added ${product.name} for ${product.price.toFixed(2)} to the cart.\n`;
    }

    function checkoutOrder () {
        const totalPriceOfOrder = productsOrdered
            .reduce((sum, product) => sum += product.price, 0);
        
        let productsList = productsOrdered.map(product => product.name);
        productsList = Array.from(new Set(productsList));
        
        outputField.textContent += `You bought ${productsList.join(', ')} for ${totalPriceOfOrder.toFixed(2)}.`;

        [...addBtnsArr, checkoutBtn].forEach(btn => btn.disabled = true);
    }

    function createProductOrdered (name, price) {
        return {name, price};
    }
}