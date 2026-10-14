'use client'

import React, { useState } from 'react'
import ChatbotTrigger from './ChatbotTrigger'
import ChatbotWindow from './ChatbotWindow'

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <ChatbotTrigger isOpen={isOpen} onClick={handleOpen} />
      <ChatbotWindow isOpen={isOpen} onClose={handleClose} />
    </>
  )
}
