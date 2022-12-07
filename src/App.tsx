import React from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [tasks, setTasks] = React.useState<string[]>([])
  const [newTask, setNewTask] = React.useState<string>('')

  return (
    <div className="App">
      <Header />
      <div className="task-list-container">
        <p>Task List</p>

        <ol className="task-list">
          {tasks.map((task, index) => (
            <div key={index + 1} className="task-item">
              <li id={`todo-item-${index + 1}`}>{task}</li>
              <button
                id={`complete-button-${index + 1}`}
                onClick={() => {
                  const newTasks = [...tasks]
                  newTasks.splice(index, 1)
                  setTasks(newTasks)
                }}
              >
                Done
              </button>
            </div>
          ))}
        </ol>

        <div className="task-input">
          <input
            id="todo-input"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value)
            }}
          />
          <button
            id="add-button"
            onClick={() => {
              if (newTask === '') {
                return
              }

              const newTasks = [...tasks]
              newTasks.push(newTask)
              setTasks(newTasks)
              setNewTask('')
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default App