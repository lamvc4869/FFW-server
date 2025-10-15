import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        orderNumber: {
            type: String,
            unique: true,
        },
        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cart',
            required: true,
        },
        paymentMethod: {
            type: String,
            enum: ['cod', 'stripe', 'razorpay'],
        },
        paymentStatus: {
            type: String,
            enum: ['pending', 'paid', 'failed'],
            default: 'pending',
        },
        orderStatus: {
            type: String,
            enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
            default: 'pending',
        },
        subtotal: {
            type: Number,
        },
        discount: {
            type: Number,
            default: 0,
        },
        totalAmount: {
            type: Number,
        },
        notes: {
            type: String,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);

export default Order;
