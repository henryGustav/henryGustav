import React, { useState } from 'react'
import { createContext } from 'react'

export const ModalContext = createContext()
const ModalProvider = props => {
  const [modalTrabajo, setmodalTrabajo] = useState(false)
  const [trabajo, settrabajo] = useState(null)
  return (
    <ModalContext.Provider
      value={{
        modalTrabajo,
        setmodalTrabajo,
        trabajo,
        settrabajo
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
export default ModalProvider
