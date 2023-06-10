'use client'
import { useEffect, useState } from 'react'

const HookUseEffect = () => {
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
      <button onClick={() => setTiktok(tiktok + 1)}>
        Aumenta Tiktok {tiktok}
      </button>
      <button onClick={() => setYoutube(youtube + 1)}>
        Aumenta Youtube {youtube}
      </button>
    </div>
  )
}

export default HookUseEffect
