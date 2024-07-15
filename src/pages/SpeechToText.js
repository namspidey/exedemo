import React, { useState } from 'react';
import '../style/Speech.css';
import { FaMicrophone } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { ImSad2 } from "react-icons/im";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const SpeechToText = () => {
  const [text, setText] = useState('. . .');
  const [isListening, setIsListening] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  //const Answer = ['3', 'はい', 'ベトナム'];
  const Answer = ['ベトナム', '先生　いつも　教えてくれてありがとうございます', '皆んなさん　めっちゃ頑張りましたね'];

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
      checkAnswer(speechResult);
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

  const checkAnswer = (result) => {
    if (result === Answer[currentIndex]) {
      setShowCorrect(true);
      setShowWrong(false);
    } else {
      setShowCorrect(false);
      setShowWrong(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < Answer.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setText('. . .');
      setShowCorrect(false);
      setShowWrong(false);
    } else {
      console.log('All sentences have been checked.');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setText('. . .');
      setShowCorrect(false);
      setShowWrong(false);
    }
  };

  return (
    <div className='speech'>
      <div className='next'>
        <button onClick={handlePrev} className={currentIndex > 0 ? '' : 'hidden'}>
          <FaAngleLeft className='next-ic'/>
        </button>
        <button onClick={handleNext} className={currentIndex < 2 ? '' : 'hidden'}>
          <FaAngleRight className='next-ic'/>
        </button>
      </div>
      <div className='text'>
        <p>Đáp Án: <span>{Answer[currentIndex]}</span></p>
        <p>Trả lời: <span>{text}</span></p>

        <p className={`noti ${showCorrect ? 'show correct' : ''}`}>
          CHÍNH XÁC! <AiFillLike className='noti-ic' />
        </p>
        <p className={`noti ${showWrong ? 'show wrong' : ''}`}>
          Chưa đúng <ImSad2 className='noti-ic' />. Hãy thử lại
        </p>
      </div>
      <button onClick={startListening} disabled={isListening} className='btn-speech'>
        <FaMicrophone className='speech-ic' />
      </button>
    </div>
  );
};

export default SpeechToText;
