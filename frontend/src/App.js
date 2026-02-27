import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import  profilePic from './profile.png';
import { useEffect,useRef } from 'react';

function App() {
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Pratik's AI assistant. Ask me anything about his skills, education, or projects!", isBot: true }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Suggested questions based on your resume
  const suggestedQuestions = [
    "What are Pratik's main technical skills?",
    "Tell me about the FilmyAdda project.",
    "What is Pratik's educational background?",
    "Does he have experience with Python?"
  ];

  const sendMessage = async (textToSend) => {
    const messageContent = textToSend || input;
    if (!messageContent.trim()) return;

    const userMessage = { text: messageContent, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInput(''); 
    setIsLoading(true);

    try {
      const response = await axios.post('https://my-personal-chatbot-d7xz.onrender.com/api/chat', {
        message: userMessage.text
      });

      const botMessage = { text: response.data.reply, isBot: true };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { text: "Oops! My backend server might not be running.", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="portfolio-container">
      
      {/* LEFT SIDEBAR */}
      <div className="sidebar">
        <div className="profile-section">
          {/* Using a sleek generated avatar for now to ensure it loads */}
          <img 
            src={profilePic} 
            alt="Pratik Mungaravadi" 
            className="profile-img" 
          />
          <h2>Pratik Mungaravadi</h2>
          <p>Software Developer</p>
          <div className="contact-details">
            📍 Bengaluru, India<br/>
            📧 pratikmungarwadi8296@gmail.com<br/>
            📞 +91 8296157586
          </div>
        </div>

        <div className="suggestions-header">Ask about:</div>
        {suggestedQuestions.map((question, index) => (
          <button 
            key={index} 
            className="suggestion-btn"
            onClick={() => sendMessage(question)}
            disabled={isLoading}
          >
            {question}
          </button>
        ))}
      </div>

      {/* RIGHT CHAT AREA */}
      <div className="chat-section">
        <div className="chat-header">
          <h3>Pratik's AI Chatbot</h3>
          <p>Ask your questions here!</p>
        </div>
        
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.isBot ? 'bot-message' : 'user-message'}`}>
              {msg.text}
            </div>
          ))}
          {isLoading && <div className="message bot-message">Typing...</div>}
          <div ref={bottomRef} />
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            disabled={isLoading}
          />
          <button onClick={() => sendMessage()} disabled={isLoading || !input.trim()}>
            Send
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
