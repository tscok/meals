import React from 'react'

import Label from './Label'
import { withElmo } from '../elmo'

const styles = {
  base: {
    marginBottom: '20px',
  },
}

const FormField = ({ children, elmo, label }) => (
  <div {...elmo()}>
    <Label>{label}</Label>
    {children}
  </div>
)

export default withElmo(styles)(FormField)
