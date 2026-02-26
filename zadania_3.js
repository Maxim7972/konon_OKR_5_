function getPrice(products) {
    if (!Array.isArray(products) || products.length === 0) {
        console.log("Массив пуст или некорректный");
        return;
    }

    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }

    const average = total / products.length;

    console.log("Средняя цена товаров:", average);
}

const items = [
    { product: "Молоко", price: 70 },
    { product: "Хлеб", price: 40 },
    { product: "Сыр", price: 250 }
];

getPrice(items);
