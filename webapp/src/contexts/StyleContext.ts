import React from 'react'
import { IStyle } from '../types/Types'

const DefaultStyle: IStyle = {
  input: {
    fontSize: '1.2em',
    variant: 'filled',
  },
}

const StyleContext = React.createContext(DefaultStyle)

export default StyleContext
