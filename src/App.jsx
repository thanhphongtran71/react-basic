import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
const App = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "learning React" },
        // { id: 2, name: "Watching movie" },
        // { id: 3, name: "Watching youtube" }

    ])



    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 10000),
            name: name
        }
        setTodoList([...todoList, newTodo])

    }

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo)
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo list</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />
                : todoList.length === 0 &&
                <div className='todo-image'>
                    <img src={reactLogo} alt="reactLogo" className='logo' />
                </div>
            }
        </div>
    )
}
export default App