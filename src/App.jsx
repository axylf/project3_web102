import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const qlist = [
    { question: "Which letter is अ?", answer: "a" },
    { question: "Which letter is आ?", answer: "aa" },
    { question: "Which letter is इ?", answer: "i" },
    { question: "Which letter is ई?", answer: "ii" },
    { question: "Which letter is उ?", answer: "u" },
    { question: "Which letter is ऊ?", answer: "uu" },
    { question: "Which letter is ए?", answer: "e" },
    { question: "Which letter is ऐ?", answer: "ai" },
    { question: "Which letter is ओ?", answer: "o" },
    { question: "Which letter is औ?", answer: "au" },
    { question: "Which letter is क?", answer: "ka" },
    { question: "Which letter is ख?", answer: "kha" },
    { question: "Which letter is ग?", answer: "ga" },
    { question: "Which letter is घ?", answer: "gha" },
    { question: "Which letter is ङ?", answer: "nga" },
    { question: "Which letter is ह?", answer: "ha" },
    { question: "Which letter is च?", answer: "ca" },
    { question: "Which letter is छ?", answer: "cha" },
    { question: "Which letter is ज?", answer: "ja" },
    { question: "Which letter is झ?", answer: "jha" },
    { question: "Which letter is ञ?", answer: "nha" },
    { question: "Which letter is य?", answer: "ya" },
    { question: "Which letter is श?", answer: "sha" },
    { question: "Which letter is ट?", answer: "t'a" },
    { question: "Which letter is ठ?", answer: "t'ha" },
    { question: "Which letter is ड?", answer: "d'a" },
    { question: "Which letter is ढ?", answer: "d'ha" },
    { question: "Which letter is ण?", answer: "n'a" },
    { question: "Which letter is र?", answer: "ra" },
    { question: "Which letter is ष?", answer: "s'a" },
    { question: "Which letter is त?", answer: "ta" },
    { question: "Which letter is थ?", answer: "tha" },
    { question: "Which letter is द?", answer: "da" },
    { question: "Which letter is ध?", answer: "dha" },
    { question: "Which letter is न?", answer: "na" },
    { question: "Which letter is ल?", answer: "la" },
    { question: "Which letter is स?", answer: "sa" },
    { question: "Which letter is प?", answer: "pa" },
    { question: "Which letter is फ?", answer: "pha" },
    { question: "Which letter is ब?", answer: "ba" },
    { question: "Which letter is भ?", answer: "bha" },
    { question: "Which letter is म?", answer: "ma" },
    { question: "Which letter is व?", answer: "va" }
  ];

  const [curcard, setCurcard] = useState(0);

  function goBack() {
    if (curcard > 0)
      setCurcard(curcard-1);
  }

  function goNext() { 
    if (curcard < qlist.length-1)
      setCurcard(curcard+1);
  }

  return (
    <div>
      <h1>Flashcards to help you learn Devanagari (for Hindi)!</h1>
      <h2>The letters of the alphabet!</h2>
      <h2>There are {qlist.length} cards!</h2>
      <p>Remember that all the letters with an apostrophe (like t') are retroflex, so they are pronounced with the tip of your tongue curled up.</p>
      <Card front={qlist[curcard].question} back={qlist[curcard].answer}/> 
      <button onClick={goBack}>Back</button>
      <button onClick={goNext}>Next</button>
      
    </div>
  )
}

export default App
