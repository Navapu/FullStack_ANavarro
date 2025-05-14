import { useState } from "react"
const Calculator = () => {
    const [result, setResult] = useState(0)
    const [calcData, setCalcData] = useState({
        num1: 0,
        num2: 0,
        operator: "+"
    })

    const handleChange = (e) => {
        setCalcData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleCalculate = () => {
        switch (calcData.operator) {
            case "+": setResult(Number(calcData.num1) + Number(calcData.num2)); break;
            case "-": setResult(calcData.num1 - calcData.num2); break;
            case "*": setResult(calcData.num1 * calcData.num2); break;
            case "/": setResult(calcData.num1 / calcData.num2); break;
        }
    }
    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <input type="number" value={calcData.num1} name='num1' onChange={handleChange} />
            <select name="operator" id="" value={calcData.operator} onChange={handleChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" value={calcData.num2} name="num2" onChange={handleChange} />
            <button onClick={handleCalculate}>=</button>
            <p>Result: {result}</p>
        </div>
    )
}
export default Calculator