import { useState } from "react"
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const handleSubmit = (e) => {
        const { name, email } = formData
        e.preventDefault();
        if (name.trim() == "" || email.trim() == "") { return; }
        if (!email.includes('@') || !email.includes('.')) { return; }

        alert('Name: ' + name + ', Email: ' + email)
        console.log('Name: ' + name + ', Email: ' + email)
    }

    const handleChange = (e) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    return (
        <form className='tasklist' onSubmit={handleSubmit}>
            <h1>Form</h1>
            <input type="text" value={formData.name} onChange={handleChange} placeholder='Name' name='name' />
            <input type="email" value={formData.email} onChange={handleChange} placeholder='Email' name='email' />
            <button type='submit'>Send</button>
        </form>
    )
}
export default Form;