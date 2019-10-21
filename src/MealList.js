import React, { useEffect, useState } from 'react'
import { database, update } from './firebase'
import { withElmo } from './elmo'

import { Button, List, ListItem } from './components'

const styles = {
  cell: {
    base: {
      alignItems: 'center',
      display: 'flex',
      padding: '10px 0',
    },
    modifiers: {
      stretch: {
        flex: 1,
      },
    },
  },
}

const MealList = ({ elmo }) => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    if (meals.length === 0) {
      getInitialMeals()
    }
  }, [meals])

  const getInitialMeals = () => {
    database('meal').on('value', snap => {
      snap.forEach(meal => {
        setMeals(current => [...current, { ...meal.val(), key: meal.key }])
      })
    })
  }

  const handleDelete = key => {
    update({ [`meal/${key}`]: null })
  }

  return (
    <List>
      {meals.map((meal, index) => (
        <ListItem key={meal.key} modifiers={['underlined']}>
          <div {...elmo('cell', ['stretch'])}>
            <span>{meal.title}</span>
          </div>
          <div {...elmo('cell')}>
            <Button onClick={() => handleDelete(meal.key)} modifiers={['secondary']}>
              Delete
            </Button>
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default withElmo(styles)(MealList)
