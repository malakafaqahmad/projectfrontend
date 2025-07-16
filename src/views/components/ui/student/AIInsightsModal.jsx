
import React, { useState } from 'react';
import './AIInsightsModal.css';

const AIInsightsModal = ({ isOpen, onClose, insights, onApplySuggestion }) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  if (!isOpen) return null;

  const handleApply = () => {
    if (selectedSuggestion) {
      onApplySuggestion(selectedSuggestion);
      onClose();
    }
  };

  return (
    <div className="ai-modal-overlay" onClick={onClose}>
      <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="ai-modal-header">
          <h3>🤖 AI Insights</h3>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        
        <div className="ai-modal-body">
          <div className="original-text-section">
            <h4>Original Text:</h4>
            <div className="original-text">{insights?.originalText}</div>
          </div>

          <div className="suggestions-section">
            <h4>AI Suggestions:</h4>
            {insights?.suggestions?.map((suggestion, index) => (
              <div key={index} className="suggestion-item">
                <label className="suggestion-label">
                  <input
                    type="radio"
                    name="suggestion"
                    value={suggestion.text}
                    onChange={(e) => setSelectedSuggestion(e.target.value)}
                  />
                  <div className="suggestion-content">
                    <div className="suggestion-text">{suggestion.text}</div>
                    <div className="suggestion-reason">{suggestion.reason}</div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-modal-footer">
          <button onClick={onClose} className="cancel-modal-btn">
            Cancel
          </button>
          <button 
            onClick={handleApply}
            disabled={!selectedSuggestion}
            className="apply-suggestion-btn"
          >
            Apply Suggestion
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInsightsModal;
