const calculateItemPrice = (product) => {
    return product.price;
};

const calculateItemTotal = (price, quantity) => {
    return price * quantity;
};

const calculateCartTotal = (products) => {
    if (!products || products.length === 0) return 0;
    
    return products.reduce((total, item) => {
        const itemTotal = calculateItemTotal(item.price, item.quantity);
        return total + itemTotal;
    }, 0);
};

export {
    calculateItemPrice,
    calculateItemTotal,
    calculateCartTotal
};
