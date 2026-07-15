import { useState } from 'react'

function Contact() {
  const [message, setMessage] = useState('')
  const [showHelp, setShowHelp] = useState(false)

  return (
    <main>
      <h1>Contact</h1>
      <button type="button" onClick={() => setShowHelp(!showHelp)}>
        Toggle Help
      </button>
      {showHelp ? <p>Type your message below.</p> : null}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <p>{message}</p>
    </main>
  )
}

export default Contact
