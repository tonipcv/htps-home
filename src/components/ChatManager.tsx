'use client'

import { usePathname } from 'next/navigation'
import { ChatWidget } from './chatbot/ChatWidget'

export function ChatManager() {
  const pathname = usePathname()
  const showChat = pathname === '/'

  if (!showChat) return null
  return <ChatWidget />
} 