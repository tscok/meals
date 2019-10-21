import React from 'react'

import { withElmo } from '../elmo'

const styles = {
  base: {
    display: 'block',
  },
}

const Label = ({ children, elmo }) => (children ? <label {...elmo()}>{children}</label> : null)

export default withElmo(styles)(Label)
