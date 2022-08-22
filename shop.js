const goods = {
    1: {
        id: 1,
        name: 'Рубашка',
        description: 'Рубашка с коротким рукавом',
        sizes: [44, 48, 52, 64],
        price: 100,
        available: true
    },
    2: {
        id: 2,
        name: 'Ботинки',
        description: 'Ботинки черные',
        sizes: [40, 42, 43, 44, 45],
        price: 500,
        available: true
    },
    3: {
        id: 3,
        name: 'Брюки',
        description: 'Брюки классические черные',
        sizes: [44, 48, 52, 64],
        price: 200,
        available: true
    },
    4: {
        id: 4,
        name: 'Куртка',
        description: 'Куртка - ветровка',
        sizes: [44, 48, 52, 64],
        price: 300,
        available: true
    },
    5: {
        id: 5,
        name: 'Носки',
        description: 'Носки черные',
        sizes: [22, 23, 24, 25, 26, 27],
        price: 70,
        available: true
    },
};


const basket = [
    {
        good: goods[2],
        amount: 1,
    },
    {
        good: goods[4],
        amount: 1,
    },
]   

const listGoodsKey = [2, 4,]

function addBasket(key, count) {
    basket.push({good: goods[key], amount: count});
    listGoodsKey.push(key);
}

function delFromBasked (key) {
    let itemListGoodsId = listGoodsKey.indexOf(key);
    listGoodsKey.splice(itemListGoodsId, 1);
    basket.splice(itemListGoodsId, 1);
}

function clearBasket () {
    basket.length = 0;
    listGoodsKey.length = 0;
}
function total () {
    let totalAmount = 0;
    let totalSumm = 0;
    let len = listGoodsKey.length;
    for (let i = 0; i < len; i++) {
        totalAmount += basket[i].amount;
        totalSumm += basket[i].good.price * basket[i].amount;
    }
    return {'totalAmount': totalAmount, 'totalSumm': totalSumm}
}

clearBasket();
addBasket(3, 1);
addBasket(5, 3);
addBasket(1,1);
delFromBasked(1);
console.log(total())
