import Order from "../../models/order.model.js";
import Cart from "../../models/cart.model.js";

export const createOrderService = async (userId, orderData) => {
  try {
    const cart = await Cart.findById(orderData.cartId).populate('products.productId');
    if (!cart) throw new Error("Không tìm thấy giỏ hàng");

    const products = cart.products.map(item => ({
      productId: item.productId._id,
      name: item.productId.name,
      image: item.productId.image[0] || '', // chỉ lấy 1 ảnh
      quantity: item.quantity,
      price: item.price,
      total: item.price * item.quantity
    }));

    if (!products.length) throw new Error("Danh sách sản phẩm trống");

    const subtotal = products.reduce((sum, p) => sum + p.total, 0);
    const totalAmount = subtotal - (orderData.discount || 0);

    const orderNumber = `ORD-${Date.now()}`;

    const newOrder = new Order({
      userId,
      orderNumber,
      cartId: orderData.cartId,
      products,
      shippingAddress: orderData.shippingAddress,
      paymentMethod: orderData.paymentMethod || 'Cash', // enum hợp lệ
      paymentStatus: orderData.paymentStatus || 'pending',
      orderStatus: orderData.orderStatus || 'processing', // enum hợp lệ
      subtotal,
      discount: orderData.discount || 0,
      totalAmount,
      notes: orderData.notes || ''
    });

    return await newOrder.save();
  } catch (error) {
    throw new Error(error.message);
  }
};
