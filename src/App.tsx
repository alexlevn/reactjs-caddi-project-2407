import React from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [tasks, setTasks] = React.useState<string[]>([])
  const [newTask, setNewTask] = React.useState<string>('')

  return (
    <div className="App">
      <Header />
      <div
        style={{
          border: '1px solid red',
          width: '1000px',
          margin: 'auto',
          textAlign: 'left',
          padding: '10px',
        }}
      >
        <p>Task List</p>

        <ol
          style={{
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {tasks.map((task, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <li key={'todo-item' + index.toString()}>{task}</li>
              <button
                id={'complete-button-' + index.toString()}
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

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
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
