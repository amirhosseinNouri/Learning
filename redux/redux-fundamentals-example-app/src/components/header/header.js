import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Header() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => setValue(e.target.value)

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim()

    if (e.key === 'Enter' && trimmedText) {
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      setValue('')
    }
  }

  return (
    <input
      type="text"
      placeholder="What need to be done?"
      autoFocus={true}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}
