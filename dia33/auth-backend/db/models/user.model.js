import mongoose from "mongoose";

const options = {
    collection: 'users',
    strict: true,
    collation: {
        locale: "en",
        strength: 1
    }
}
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, options);

export const User = mongoose.model('User', userSchema);