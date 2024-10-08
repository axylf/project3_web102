import React, { useState } from "react";

const Card = (props) => {
    const [text, setText] = useState(props.front);
    const [answerUp, setAnswerUp] = useState(false);
    const [field, setField] = useState('');
    const [correctField, setCorrectField] = useState('');

    function flipCard() {
        setAnswerUp(!answerUp);
    }
    function handleChange(e) {
        setCorrectField('');
        setField(e.target.value.toLowerCase().trim());
    }
    function checkAnswer() {
        if (!answerUp) {
            setCorrectField((field == props.back) ? 'correct' : 'wrong');
        } 
    }

    return (
        <div>
            <div className="card" onClick={flipCard}>
                {answerUp ? props.back : props.front}
            </div>
            <input type="text" name="guessans" placeholder="Put your answer here..." onChange={handleChange} id={correctField} />
            <button onClick={checkAnswer}>Check</button>
        </div>
    )
}

export default Card;