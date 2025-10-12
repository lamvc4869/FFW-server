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
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            name: {
                type: String,
            },
            image: {
                type: String,
            },
            quantity: {
                type: Number,
            },
            price: {
                type: Number,
            },
            total: {
                type: Number,
            },
        }],
        shippingAddress: {
            name: {
                type: String,
            },
            phone: {
                type: String,
            },
            street: {
                type: String,
            },
            city: {
                type: String,
            },
            state: {
                type: String,
            },
            zipcode: {
                type: String,
            },
            country: {
                type: String,
            },
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
        shippingFee: {
            type: Number,
            default: 0,
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
        estimatedDelivery: {
            type: Date,
        },
        deliveredAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);

export default Order;
