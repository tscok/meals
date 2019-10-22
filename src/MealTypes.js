import React, { useEffect, useState } from 'react'

import { Button } from './components'
import { capitalize } from './utils'
import { database } from './firebase'

const MealTypes = ({ onChange }) => {
  const [selected, setSelected] = useState(null)
  const [types, setTypes] = useState([])

  useEffect(() => {
    if (types.length === 0) {
      getTypes()
    }
  }, [types])

  const getModifier = type => {
    return type === selected ? ['primary'] : ['secondary']
  }

  const getTypes = async () => {
    const snap = await database('type').once('value')
    const list = snap.exists() ? Object.keys(snap.val()) : []
    setTypes(list)
  }

  const handleClick = type => {
    setSelected(type)
    onChange(type)
  }

  return (
    <div>
      {types.map(type => (
        <Button key={type} modifiers={getModifier(type)} onClick={() => handleClick(type)}>
          {capitalize(type)}
        </Button>
      ))}
    </div>
  )
}

export default MealTypes
