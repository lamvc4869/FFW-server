import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        orderNumber: {
            type: String,
            unique: true,
            // required: true,
        },
        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cart',
            required: true,
        },
        products: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
            price: {
                type: Number,
                required: true,
            },
            total: {
                type: Number,
                required: true,
            },
        }],
        shippingAddress: {
            type: String,
            required: true,
        },
        paymentMethod: {
            type: String,
            enum: ['cod', 'online'],
            required: true,
        },
        paymentStatus: {
            type: String,
            enum: ['pending', 'paid', 'failed', 'refunded'],
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
        cancelAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

orderSchema.index({ orderNumber: 1 }, { unique: true });
orderSchema.index({ userId: 1, createdAt: -1 });

const Order = mongoose.model("order", orderSchema);

export default Order;
