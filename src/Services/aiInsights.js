
import apiInstance from './instances';

const getAIInsights = async (selectedText, userPrompt) => {
  try {
    const response = await apiInstance.post('/ai/insights', {
      selectedText: selectedText,
      userPrompt: userPrompt,
      context: 'resume_editor'
    });
    return response.data;
  } catch (error) {
    console.error("Error getting AI insights:", error);
    throw error;
  }
};

const applyAISuggestion = async (originalText, suggestion) => {
  try {
    const response = await apiInstance.post('/ai/apply-suggestion', {
      originalText: originalText,
      suggestion: suggestion
    });
    return response.data;
  } catch (error) {
    console.error("Error applying AI suggestion:", error);
    throw error;
  }
};

export { getAIInsights, applyAISuggestion };
