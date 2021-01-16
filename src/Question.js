import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Question.css'

export default function Question() {
	const questions = [
		{
			questionText: 'Where do you eat often :',
			answerOptions: [
				{ answerText: 'Home', isCorrect: false },
				{ answerText: 'Dine-In', isCorrect: false },
				{ answerText: 'Delivery', isCorrect: true },
				
			],
		},
		{
			questionText: 'How do you order online:',
			answerOptions: [
				{ answerText: 'Zomato ', isCorrect: false },
				{ answerText: 'Swiggy ', isCorrect: true },
				
			],
		},
		{
			questionText: 'Which drink do you often order with your food:',
			answerOptions: [
				{ answerText: 'Thumbs Up ', isCorrect: false },
				{ answerText: 'Coca Cola ', isCorrect: false },
				{ answerText: 'Mirinda ', isCorrect: true },
				{ answerText: 'Fanta ', isCorrect: true },
			],
		},
		{
			questionText: 'What do you like about the drink you selected in the previous question?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [end,setEnd]=useState(false);

	const handleAnswerOptionClick = (isCorrect) => {
        if(!isCorrect){
            setEnd(true);
            setShowScore(true);
            return;
        }
        if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <>
        {end?
        <><div className="endQuiz"><strong>Quiz ended!</strong>
        <br></br>
        {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			):<></>}
        </div>
        <Button style={{width:"200px"}} variant="contained"><Link to="/">go to home page!</Link></Button>
        </>
        :
        <>
            <div className='question'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>{score===3?<>
                        <input type="text"/>
                        <button onClick={()=>setEnd(true)} type="submit">Submit</button>
                    </>:<>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
							<button style={{color:"white"}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
                    </>}
						
					</div>
				</>
			)}
		</div>
        </>
        }
		
        </>
	);
}