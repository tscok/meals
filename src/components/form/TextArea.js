import React from 'react'

const TextArea = ({ onChange, value }) => {
  const handleChange = event => onChange(event.target.value)
  return <textarea onChange={handleChange} value={value} />
}

export default TextArea
