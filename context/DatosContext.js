import React, { createContext, useMemo } from 'react'

export const DatosContext = createContext()
const DatosProvider = props => {
  const host = 'http://172.16.3.84:4001'

  // const host = 'https://coretms.tecnomegastore.ec/admin'

  const value = useMemo(() => {
    return {
      host
    }
  }, [host])

  return (
    <DatosContext.Provider value={value}>
      {props.children}
    </DatosContext.Provider>
  )
}
export default DatosProvider
