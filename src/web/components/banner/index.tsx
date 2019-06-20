import * as React from 'react'
import { useObservable, useObserver } from 'mobx-react-lite'

const { useRef, useCallback } = React

const Banner = () => {
  const todos = useObservable(new Map<string, boolean>())
  const todoRef = useRef()
  const addTodo = useCallback(() => {
    todos.set(todoRef.current.value, false)
    todoRef.current.value = ''
  }, [])
  const toggleTodo = useCallback((todo: string) => {
    todos.set(todo, !todos.get(todo))
  }, [])

  return useObserver(() => (
    <div>
      {Array.from(todos).map(([todo, done]) => (
        <div onClick={() => toggleTodo(todo)} key={todo}>
          {todo}
          {done ? " ✔" : " ⏲"}
        </div>
      ))}
      <input ref={todoRef} />
      <button onClick={addTodo}>Add todo</button>
    </div>
  ))
}

export default Banner
