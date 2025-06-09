import { Product } from "../db/models/index.js";

const ResponseAPI = {
    msg: "",
    data: [],
    status: 'ok'
}
export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.find().populate("owner");
        if(!product){
            ResponseAPI.msg = 'Products not found'
            ResponseAPI.status = 'error'
            return res.status(404).json(ResponseAPI)
        }
        ResponseAPI.msg = 'Products obtained'
        ResponseAPI.data = product
        res.status(200).json(ResponseAPI)
    } catch (error) {
        next(error)
    }
}

export const createProduct = async (req, res, next) => {
    try {
        const {name, price, owner} = req.body;
        const product = await Product.create({
            name: name,
            price: Number(price),
            owner: owner
        })

        ResponseAPI.msg = `Product: ${name} has been created`
        ResponseAPI.data = product;
        res.status(200).json(ResponseAPI)

    } catch (error) {
        next(error)
    }
}
