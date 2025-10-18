import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
            required: true,
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
    },
    { _id: false }
);

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
            unique: true,
        },
        items: {
            type: [cartItemSchema],
            default: [],
        },
        totalAmount: {
            type: Number,
            default: 0,
        },
        currency: {
            type: String,
            default: 'VND',
        },
        note: {
            type: String,
        },
        status: {
            type: String,
            enum: ['active', 'locked'],
            default: 'active',
        },
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'order',
        }
    },
    { timestamps: true }
);


cartSchema.pre('save', function(next) {
    this.totalAmount = (this.items || []).reduce((sum, it) => sum + (it.price * it.quantity), 0);
    next();
});


cartSchema.index({ userId: 1 }, { unique: true });
cartSchema.index({ 'items.productId': 1 });
cartSchema.index({ userId: 1, status: 1 }, { unique: true, partialFilterExpression: { status: 'active' } });

const Cart = mongoose.model("cart", cartSchema);

export default Cart;
