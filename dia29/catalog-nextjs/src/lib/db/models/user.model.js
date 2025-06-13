import mongoose from 'mongoose'

const options = {
    collection: 'users',
    strict: true,
    collation: {
        locale: "en",
        strength: 1
    }
}
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: String,
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
},{
    timestamps: true
},
options);

export const User = mongoose.models.User || mongoose.model('User', userSchema);