import React from 'react'

import SelectOption from './SelectOption'

const Select = ({ children, disabled = false, onChange, value }) => {
  const handleChange = ({ target }) => target.value && onChange(target.value)
  return (
    <select disabled={disabled} onChange={handleChange} value={value}>
      <SelectOption>Select…</SelectOption>
      {children}
    </select>
  )
}

export default Select
