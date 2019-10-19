import React, { useEffect, useState } from 'react'

import { database } from './firebase'

const MealList = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    if (meals.length === 0) {
      getInitialMeals()
    }
  }, [meals])

  const getInitialMeals = async () => {
    database('meal').on('child_added', meal => {
      setMeals(current => [...current, { ...meal.val(), key: meal.key }])
    })
  }

  return (
    <ul>
      {meals.map(meal => (
        <li key={meal.key} onClick={() => console.log(meal.key)}>
          <img src={meal.imageUrl} alt="" style={{ width: '40px' }} />
          {meal.title}
        </li>
      ))}
    </ul>
  )
}

export default MealList
