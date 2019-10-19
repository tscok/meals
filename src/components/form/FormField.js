import React from 'react'

const FormField = ({ children, label }) => (
  <div style={{ marginBottom: '20px' }}>
    {label && <label style={{ display: 'block' }}>{label}</label>}
    {children}
  </div>
)

export default FormField
