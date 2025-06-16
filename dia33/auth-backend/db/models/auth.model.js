import mongoose from "mongoose";

const options = {
    collection: 'authusers',
    strict: true,
    collation: {
        locale: "en",
        strength: 1
    }
}
const authUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
}, {
    timestamps: true
}, options);

export const authUser = mongoose.model('authUser', authUserSchema);