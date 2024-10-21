// Chat.tsx
import React, { useState } from 'react'

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input])
      setInput('') // Clear input after sending
    }
  }

  return (
    <div className='chat-container w-full bg-red-900 p-5 rounded-md shadow-lg flex flex-col'>
      {/* Message display area */}
      <div className='chat-messages overflow-y-auto flex-grow bg-red-800 p-3 rounded-lg mb-3'>
        {messages.length === 0 ? (
          <p className='text-red-400'>No messages yet...</p>
        ) : (
          messages.map((msg, index) => (
            <p key={index} className='text-white mb-2'>
              {msg}
            </p>
          ))
        )}
      </div>

      <div className='chat-input flex '>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='w-full p-2 rounded-l-lg border-none focus:outline-none bg-gray-700 text-white'
          placeholder='Type your message...'
        />
        <button
          onClick={handleSendMessage}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg transition duration-300 ease-in-out'
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Chat
