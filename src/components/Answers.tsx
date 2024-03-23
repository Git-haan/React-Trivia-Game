import { useState, useEffect} from 'react';
import { Question } from '../types';
import Answer from './Answer';
import Answers_module from './Answers.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

function Answers(props: Props) {
    const [showAnswer, setShowAnswer] = useState(false);

    // This useEffect will reset the color
    useEffect(() => {
        setShowAnswer(false);
    }, [props.question]);

    // This function will be called when the user clicks on an answer
    const onPress = (idx: number) => {
        setShowAnswer(true);
        props.onSubmit(idx === props.question.correctAnswerIdx); // Checks if the answer is correct
    };

    return (
        <div className={Answers_module.choices}>
            {props.question.choices.map((choice, idx) => {
                let color = '';

                // If the choice index equals correct answer index, color it green
                if (showAnswer && props.question.correctAnswerIdx === idx) color = 'green';
                // If the choice index does not equal correct answer index, color it red
                else if (showAnswer) color = 'red';

                return (
                    <Answer
                        test={choice}
                        onPress={() => onPress(idx)}
                        color={color}
                        disabled={showAnswer}
                        key={idx}
                    />
                );
            })}
        </div>
    );
}

export default Answers;
