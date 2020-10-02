//need this file to void circular dependency
//https://stackoverflow.com/questions/56384761/cannot-access-class-contexttype-within-a-child-component

import React from 'react'

export const myContext = React.createContext('');