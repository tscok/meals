import React from 'react'

const TextField = ({ onChange, placeholder, type = 'text', value }) => {
  const handleChange = event => onChange(event.target.value)
  return <input onChange={handleChange} placeholder={placeholder} type={type} value={value} />
}

export default TextField
