'use client'
import { createContext, useState } from "react";

const GlobalContext = createContext()
const GeneralContext = ({children}) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [status, setStatus] = useState('Seja bem-vindo! Faça login!')
  
  function signIn() {
    setAuthenticated(true)
    setStatus('Cadastre-se para mais conteúdos')
  }
  
  function logOut() {
    setAuthenticated(false)
    setStatus('Seja bem-vindo! Faça login!')
  }

  return (
    <GlobalContext.Provider value={{
      signIn,
      logOut,
      authenticated,
      status
    }}>
      {children}
    </GlobalContext.Provider>
  )
}


export {
  GeneralContext,
  GlobalContext
}