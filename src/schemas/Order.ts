import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    typeofmeal: {
        type: String,
    },
    price: {
        type: String,
    },
});

const Order = mongoose.model('order', OrderSchema);

export default Order;
