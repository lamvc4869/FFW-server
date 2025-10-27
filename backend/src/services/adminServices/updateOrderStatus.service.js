import getAllOrdersService from "./getAllOrders.service.js";
import { restoreStockOfProducts } from "../../lib/helpers/updateStock.js";

const updateOrderStatusService = async (orderId, newStatus) => {
    const orders = await getAllOrdersService();
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex === -1) {
        throw new Error("Không tìm thấy đơn hàng");
    }

    if (orders[orderIndex].status === "cancelled") {
        throw new Error("Đơn hàng đã bị hủy, không thể cập nhật trạng thái");
    }

    if (newStatus === "cancelled") {
        orders[orderIndex].cancelledAt = new Date();
        restoreStockOfProducts(orders[orderIndex].products);
    }
    orders[orderIndex].orderStatus = newStatus;
    await orders[orderIndex].save();
    return orders[orderIndex];
};

export default updateOrderStatusService;