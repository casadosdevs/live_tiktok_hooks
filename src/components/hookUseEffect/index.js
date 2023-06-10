'use client'
import { GlobalContext } from '@/context/GlobalContext'
import { useContext, useEffect, useState } from 'react'

const HookUseEffect = () => {
  const { signIn, logOut, authenticated } = useContext(GlobalContext)

  const [tiktok, setTiktok] = useState(0)
  const [youtube, setYoutube] = useState(0)
  
  useEffect(() => {
    console.log('TIKTOK DENTRO DO USEEFFECT')
  }, [tiktok])
  
  useEffect(() => {
    console.log('YOUTUBE DENTRO DO USEEFFECT')
  }, [youtube])

  return (
    <div>
      {authenticated && 
        <>
          {console.log('MEU COMPONENTE')}
          <button onClick={() => setTiktok(tiktok + 1)}>
            Aumenta Tiktok {tiktok}
          </button>
          <button onClick={() => setYoutube(youtube + 1)}>
            Aumenta Youtube {youtube}
          </button>
        </>
      }
      <button onClick={() => signIn()}>
        Logar
      </button>
      <button onClick={() => logOut()}>
        Deslogar
      </button>
    </div>
  )
}

export default HookUseEffect
