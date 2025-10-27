import Order from "../../models/order.model.js";

const getAllOrdersService = async () => {
    const orders = await Order.find().sort({ createdAt: -1 });
    if (!orders) {
        return "Không có đơn hàng nào";
    }
    return orders;
};

export default getAllOrdersService;