import React, { useState } from 'react';

const SpeechToText = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setText(speechResult);
      setIsListening(false);
    };

    recognition.onspeechend = () => {
      recognition.stop();
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };
  };

  return (
    <div>
      <button onClick={startListening} disabled={isListening}>
        {isListening ? 'Listening...' : 'Start Listening'}
      </button>
      <p>Text: {text}</p>
    </div>
  );
};

export default SpeechToText;
