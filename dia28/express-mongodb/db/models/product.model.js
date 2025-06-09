import mongoose from "mongoose";

const options = {
    collection: 'products',
    strict: true,
    collation: {
        locale: "en",
        strength: 1
    }
}
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, options);

export const Product = mongoose.model('Product', productSchema);