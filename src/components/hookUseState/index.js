'use client';
import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useState } from "react";

const HookUseState = () => {
  const { status, authenticated } = useContext(GlobalContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name) {
      setMessage('Você não informou seu nome')
      return
    }

    if (!email) {
      setMessage('Você não informou seu e-mail')
      return
    }

    setMessage(`Olá, ${name}, você se inscreveu na Casa dos Devs com o e-mail ${email}`)
  }

  if (authenticated) {
    return (
      <form onSubmit={handleSubmit}>
        <h1>{status}</h1>
        <input type="text" onChange={handleName} />
        <input type="email" onChange={handleEmail} />
        <button type="submit">
          Cadastrar-se
        </button>
        {message}
      </form>
    );
  } else {
    return(<h1>{status}</h1>)
  }
}

export default HookUseState
