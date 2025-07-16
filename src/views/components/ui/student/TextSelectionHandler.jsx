
import React, { useState, useEffect } from 'react';
import './TextSelectionHandler.css';

const TextSelectionHandler = ({ onAIInsight }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const [userPrompt, setUserPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleTextSelection = () => {
      const selection = window.getSelection();
      const text = selection.toString().trim();
      
      if (text.length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        setSelectedText(text);
        setPopupPosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 10
        });
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.ai-insight-popup')) {
        setShowPopup(false);
        setUserPrompt('');
      }
    };

    document.addEventListener('mouseup', handleTextSelection);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleTextSelection);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleAIRequest = async () => {
    if (!userPrompt.trim()) return;
    
    setIsLoading(true);
    try {
      await onAIInsight(selectedText, userPrompt);
      setShowPopup(false);
      setUserPrompt('');
    } catch (error) {
      console.error('AI insight error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div 
      className="ai-insight-popup"
      style={{
        position: 'fixed',
        left: `${popupPosition.x}px`,
        top: `${popupPosition.y}px`,
        transform: 'translateX(-50%) translateY(-100%)',
        zIndex: 1000
      }}
    >
      <div className="popup-content">
        <div className="selected-text-preview">
          Selected: "{selectedText.substring(0, 50)}..."
        </div>
        <input
          type="text"
          placeholder="How should I improve this text?"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAIRequest()}
          className="ai-prompt-input"
          autoFocus
        />
        <div className="popup-buttons">
          <button 
            onClick={handleAIRequest}
            disabled={isLoading || !userPrompt.trim()}
            className="ai-insight-btn"
          >
            {isLoading ? '🤖 Thinking...' : '✨ AI Insights'}
          </button>
          <button 
            onClick={() => setShowPopup(false)}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextSelectionHandler;
