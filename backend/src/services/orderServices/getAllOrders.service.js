import Order from "../../models/order.model.js";

const getAllOrdersService = async (userId) => {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    if (!orders || orders.length === 0) {
        return "Không tìm thấy đơn hàng nào";
    }
    return orders;
};

export default getAllOrdersService;