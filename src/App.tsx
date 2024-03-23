import QuestionComp from './components/Question';
import StatBar from './components/StatBar';
import questions from './questions.json';
import { Questions } from './types';
import { useState } from 'react';
import App_module from './App.module.scss';
import App_board_module from './_codux/boards/app/app.board.module.scss';
import Classnames from 'classnames';
import Reset from './components/Reset';
import Answer_module from './components/Answer.module.scss';

function App() {
    // Grabs questions from the JSON file
    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswer, setCorrect] = useState(0);
    const [incorrectAnswer, setIncorrect] = useState(0);

    const [waitingToAdvance, setWaitingToAdvance] = useState(false);

    // Function that handles user submission
    const onSubmit = (correct: boolean) => {
        if (correct) setCorrect(correctAnswer + 1);
        else setIncorrect(incorrectAnswer + 1);

        setWaitingToAdvance(true);
    };

    // Function that advances the question
    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    };

    // Function that resets the game
    const reset = () => {
        setCurrentQuestionIdx(0);
        setCorrect(0);
        setIncorrect(0);
        setWaitingToAdvance(false);
    };

    // Handles the reset screen
    if (currentQuestionIdx >= allQuestions.questions.length)
        return (
            <Reset
                totalQuestions={allQuestions.questions.length}
                correctQuestions={correctAnswer}
                onPress={reset}
            />
        );

    return (
        <div className={App_board_module.app}>
            <StatBar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswer}
                incorrect={incorrectAnswer}
            />
            <QuestionComp
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={onSubmit}
            />

            {waitingToAdvance && (
                <button
                    onClick={advance}
                    className={Classnames(Answer_module.answer, App_module['next-btn'])}
                >
                    Next Question
                </button>
            )}
        </div>
    );
}

export default App;
