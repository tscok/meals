import React, { Fragment, useEffect, useState } from 'react'

import { FormField, Select, SelectOption, TextArea, TextField } from './components'

import { capitalize } from './utils'
import { database, update } from './firebase'

const defaultState = {
  title: '',
  description: '',
  imageUrl: '',
  type: '',
}

const MealForm = () => {
  const [state, setState] = useState(defaultState)
  const [types, setTypes] = useState([])

  useEffect(() => {
    if (types.length === 0) {
      getTypes()
    }
  }, [types])

  const getTypes = async () => {
    const snap = await database('type').once('value')
    const list = snap.exists() ? Object.keys(snap.val()) : []
    setTypes(list)
  }

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
    <Fragment>
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
        <Select disabled={types.length === 0} onChange={handleInput('type')} value={state.type}>
          {types.map(type => (
            <SelectOption key={type} value={type}>
              {capitalize(type)}
            </SelectOption>
          ))}
        </Select>
      </FormField>
      <button type="button" onClick={handleSave}>
        Save
      </button>
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
    </Fragment>
  )
}

export default MealForm
