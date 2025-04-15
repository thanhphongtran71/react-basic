import { useState } from "react"

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props

    const handleClick = () => {
        if (valueInput.length > 0)
            addNewTodo(valueInput)
        else
            alert("Please input text")
        setValueInput('')
    }
    const handleOnChange = (name) => {
        setValueInput(name)

    }
    return (

        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button
                className='button' style={{ cursor: 'pointer' }}
                onClick={handleClick}
            >Add</button>
            <div>
                My test input is {valueInput}
            </div>
        </div>
    )
}

export default TodoNew