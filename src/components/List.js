import React from 'react'
import { withElmo } from '../elmo'

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
}

const List = ({ children, elmo }) => <ul {...elmo()}>{children}</ul>

export default withElmo(styles)(List)
