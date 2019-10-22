import React, { useState } from 'react'

import { Button, FormField, TextArea, TextField } from './components'

import MealTypes from './MealTypes'

import { database, update } from './firebase'
import elmo from './elmo'

const defaultState = {
  title: '',
  description: '',
  imageUrl: '',
  type: '',
}

const styles = elmo({})

const MealForm = () => {
  const [state, setState] = useState(defaultState)

  const handleInput = key => value => {
    setState(props => ({ ...props, [key]: value }))
  }

  const handleReset = () => {
    setState(defaultState)
  }

  const handleSave = () => {
    const { key } = database('meal').push()
    update({ [`meal/${key}`]: state })
    handleReset()
  }

  return (
    <div {...styles('form')}>
      {state.imageUrl && (
        <div>
          <img
            src={state.imageUrl}
            alt={`${state.title} ${state.subTitle}`}
            style={{ width: '300px' }}
          />
        </div>
      )}
      <FormField label="Title">
        <TextField onChange={handleInput('title')} value={state.title} />
      </FormField>
      <FormField label="Description">
        <TextArea onChange={handleInput('description')} value={state.description} />
      </FormField>
      <FormField label="Image Url">
        <TextField onChange={handleInput('imageUrl')} value={state.imageUrl} />
      </FormField>
      <FormField label="Type">
        <MealTypes onChange={handleInput('type')} />
      </FormField>
      <Button onClick={handleSave} modifiers={['primary']}>
        Save
      </Button>
      <Button type="reset" onClick={handleReset} modifiers={['secondary', 'trailing']}>
        Reset
      </Button>
    </div>
  )
}

export default MealForm
