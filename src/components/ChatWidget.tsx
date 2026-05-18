"use client";
import * as React from "react";

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "안녕하세요. 더드림법률사무소 AI 상담사입니다. 무엇을 도와드릴까요? (예: 교통사고 합의 절차가 궁금해요)" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMessage }]);
    setIsLoading(true);

    // Format history for context (simplified)
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToGemini(userMessage, history);

    setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-24 md:bottom-10 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-[#1B3B5A] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              <span className="font-bold">AI 법률 상담</span>
            </div>
            <button onClick={toggleChat} className="hover:bg-white/10 p-1 rounded transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#F4F7F9] space-y-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === ChatRole.USER
                    ? 'bg-[#3182A4] text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                  <Loader2 className="w-5 h-5 animate-spin text-[#3182A4]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="질문을 입력하세요..."
              className="flex-1 bg-[#F4F7F9] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3182A4]"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-[#3182A4] text-white p-2 rounded-full hover:bg-[#256a88] transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          <div className="px-4 py-2 bg-slate-50 text-sm text-slate-400 text-center border-t border-slate-100">
            AI 답변은 법적 효력이 없으며 참고용으로만 활용하세요.
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className="group flex items-center gap-2 bg-[#1B3B5A] text-white px-5 py-4 rounded-full shadow-lg hover:bg-[#152e46] transition-all hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="font-bold hidden md:inline">실시간 AI 상담</span>
      </button>
    </div>
  );
};

export default ChatWidget;