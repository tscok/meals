import React from 'react'

import { withElmo } from '../elmo'

const variants = {
  danger: {
    backgroundColor: 'deeppink',
    color: 'white',
    ':hover': {
      backgroundColor: 'hotpink',
    },
  },
  default: {
    backgroundColor: '#e6e6e6',
    ':hover': {
      backgroundColor: '#eee',
    },
  },
  primary: {
    backgroundColor: 'dodgerblue',
    color: 'white',
    ':hover': {
      backgroundColor: 'deepskyblue',
    },
  },
  secondary: {
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    ':hover': {
      borderColor: 'rgba(0, 0, 0, 0.2)',
    },
  },
}

const styles = {
  base: {
    background: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
    color: 'black',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '30px',
    outline: 'none',
    padding: '0 20px',
  },
  modifiers: {
    ...variants,
    iconOnly: {
      padding: 0,
    },
    trailing: {
      marginLeft: '10px',
    },
  },
}

const Button = ({ children, elmo, onClick, type = 'button', modifiers = [] }) => {
  const handleClick = event => {
    event.preventDefault()
    onClick()
  }

  if (!Object.keys(variants).some(key => modifiers.includes(key))) {
    modifiers = ['default', ...modifiers]
  }

  return (
    <button {...elmo(modifiers)} onClick={handleClick} type={type}>
      {children}
    </button>
  )
}

export default withElmo(styles)(Button)
