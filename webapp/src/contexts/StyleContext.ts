import React from 'react'
import { IStyle } from '../types/Types'

const DefaultStyle: IStyle = {
  input: {
    fontSize: '1.2em',
    variant: 'filled',
    spacing: 2,
  },
}

const StyleContext = React.createContext(DefaultStyle)

export default StyleContext
