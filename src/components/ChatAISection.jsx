'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

const AIChatWidget = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "ai", timestamp: new Date() }
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user",
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, newMessage])
      setInputValue("")
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! This is a demo response from the AI assistant.",
          sender: "ai",
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiResponse])
      }, 1000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Chat Panel */}
      {isOpen && (
        <div className={`absolute bottom-24 right-0 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle size={18} className="drop-shadow-sm" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI Assistant</h3>
                <p className="text-xs text-blue-100 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-blue-200 transition-colors p-1 hover:bg-blue-600 rounded-full"
            >
              <X size={18} className="drop-shadow-sm" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-2 border-t border-gray-200 bg-white">
            <div className="flex space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm shadow-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button with Enhanced Animations */}
      <div className="relative">
        {/* Outer Pulse Circle */}
        {!isOpen && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-30 h-30 border-2 border-blue-400 rounded-full animate-ping opacity-30"></div>
          </div>
        )}
        
        {/* Pulsing Wave Rings */}
        {!isOpen && (
          <>
            <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75" style={{ animationDelay: '1.4s' }}></div>
          </>
        )}
        
        {/* Main Chat Button */}
        <button
          onClick={toggleChat}
          className={`relative w-15 h-15 rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center ${
            isOpen 
              ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 ' 
              : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
          }`}
        >
          <div className="flex flex-col items-center">
            {isOpen ? (
              <X size={18} className="drop-shadow-sm" />
            ) : (
              <>
                <MessageCircle size={18} className="drop-shadow-sm" />
                <span className="text-xs font-medium mt-1 whitespace-nowrap">Chat with AI</span>
              </>
            )}
          </div>
        </button>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Chat with AI Assistant
              <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AIChatWidget