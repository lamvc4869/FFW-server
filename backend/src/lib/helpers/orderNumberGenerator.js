const generateOrderNumber = () => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomNum = Math.floor(1000 + Math.random() * 9000);  
    return `ORD-${date}-${randomNum}`;
};

export { generateOrderNumber };