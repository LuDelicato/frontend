import React, { useState, useEffect, useRef } from 'react';
import { prompts } from '../data/chatbot';
import './chatbot.css';

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [showWidget, setShowWidget] = useState(false);
  const messageRef = useRef(null);
  const widgetRef = useRef(null);

  const promptClick = (answer) => {
    setChatHistory([...chatHistory, { question: answer.question }]);
    setTimeout(() => {
      setChatHistory([...chatHistory, { answer: answer.answer }]);
    }, 550);
  };

  const chatbotClick = () => {
    setShowWidget(!showWidget);
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  function outsideClick(event) {
    if (widgetRef.current && !widgetRef.current.contains(event.target)) {
      setShowWidget(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', outsideClick);
    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, []);

  return (
    <div>
      <div className={`chatbot-icon ${showWidget ? 'hide' : ''}`} onClick={chatbotClick}>
        <div className='chat-icon'>
          <div>
            <div className='chat-text'>
              <p>Chat</p>
            </div>
          </div>
        </div>
      </div>
      <div ref={widgetRef} className={`chatbot-widget ${showWidget ? 'show-chatbot-widget' : ''}`}>
        <div className='chat-history'>
          {chatHistory.map((message, index) => (
            <div key={index} className='chat-message' ref={index === chatHistory.length - 1 ? messageRef : null}>
              {message.question && <div className='chat-question'>{message.question}</div>}
              {message.answer && (
                <div className='chat-answer'>
                  <p>{message.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='prompts'>
          {prompts.map((prompt) => (
            <button key={prompt.id} onClick={() => promptClick(prompt)} className='prompt-button'>
              {prompt.question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
