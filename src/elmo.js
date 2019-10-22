import React from 'react'
import { css } from 'glamor'

function parseArrayItem(obj) {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean)
  }

  return Object.entries(obj)
    .filter(([key, val]) => val)
    .map(([key, val]) => (typeof val === 'boolean' ? key : val))
}

function parseModifiers(array) {
  const reduceArray = (acc, item) => {
    const modifier = item ? parseArrayItem(item) : []
    return [...acc, ...modifier]
  }

  return array.reduce(reduceArray, [])
}

function parseParams(params) {
  const hasElement = params.length > 0 && typeof params[0] === 'string'

  return hasElement
    ? { element: params[0], modifiers: parseModifiers(params.slice(1)) }
    : { element: null, modifiers: parseModifiers(params) }
}

function getClassNames(params) {
  const { element, modifiers } = parseParams(params)
  const base = element === null ? 'elmo' : `elmo__${element}`
  const additional = modifiers.map(modifier => `elmo--${modifier}`)

  return [base, ...additional].join(' ')
}

function getElementStyles(styles, params) {
  const { element, modifiers } = parseParams(params)
  const elementStyle = styles[element] || styles

  return {
    ...elementStyle.base,
    ...modifiers.reduce(
      (acc, modifier) => ({
        ...acc,
        ...(elementStyle.modifiers && elementStyle.modifiers[modifier]
          ? elementStyle.modifiers[modifier]
          : {}),
      }),
      {},
    ),
  }
}

export default function elmo(styles) {
  return (...params) => ({
    className: getClassNames(params),
    ...css(getElementStyles(styles, params)),
  })
}

export const withElmo = styles => WrappedComponent => props => {
  return <WrappedComponent {...props} elmo={elmo(styles)} />
}
