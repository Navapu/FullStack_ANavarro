import { useState } from "react"

const Cart = () => {
    const [formData, setFormData] = useState({
        item: "",
        price: 0
    })

    const [cart, setCart] = useState([])
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleAdd = () => {
        if (formData.item === "") { return; }
        if (formData.price === 0) { return; }
        setCart([...cart, { item: formData.item, price: Number(formData.price)}])
        setFormData({ item: "", price: 0 })
    }
    
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

    const styletotalPrice = (totalPrice > 100) ? 'h2-price' : null

    return (
        <div className="div-cart">
            <h1>Cart</h1>

            <input type="text" value={formData.item} onChange={handleChange} name="item" />
            <input type="number" name="price" value={formData.price} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {cart.map(({ item, price }, idx) => {
                    return item != undefined && <li key={idx}>{item}: {price}€</li>
                })}
            </ul>
            <h2 className={styletotalPrice}>Total: {totalPrice}€</h2>
        </div>
    )
}
export default Cart