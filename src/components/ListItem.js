import React from 'react'
import { withElmo } from '../elmo'

const styles = {
  base: {
    alignItems: 'center',
    display: 'flex',
    padding: '0 10px',
    ':hover': {
      backgroundColor: '#f9f9f9',
    },
  },
  modifiers: {
    underlined: {
      borderBottom: '1px solid #eee',
    },
  },
}

const ListItem = ({ children, elmo, modifiers = [] }) => <li {...elmo(modifiers)}>{children}</li>

export default withElmo(styles)(ListItem)
