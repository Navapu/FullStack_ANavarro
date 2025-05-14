import { useState } from "react"
const TextArea = () => {
    const [userText, setUserText] = useState("")
    const [words, setWords] = useState(0)
    const [char, setChar] = useState(0)
    const handleChange = (e) => {
      setUserText(e.target.value)
      setChar(e.target.value.trim().length)
      const auxWords = (e.target.value.trim().split(" ") == '') ? 0 : e.target.value.trim().split(" ").length
      setWords(auxWords)
    }
    return (
      <div>
        <textarea cols="30" rows="10" value={userText} onChange={handleChange}></textarea>
        <p>Words: {words}</p>
        <p>Characters: {char}</p>
      </div>
    )
  }
export default TextArea;