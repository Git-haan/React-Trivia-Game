import Answer_module from './Answer.module.scss';
import Question_module from './Question.module.scss';
import Reset_module from './Reset.module.scss';
import Classnames from 'classnames';
type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};

// Displays the user's score and a button to try again
function Reset(props: Props) {
    return (
        <div>
            <h1 className={Classnames(Question_module.question, Reset_module.score)}>
                You scored: {Math.round((props.correctQuestions / props.totalQuestions) * 100)}%
            </h1>
            <button
                onClick={props.onPress}
                className={Classnames(Answer_module.answer, Reset_module['try-again-btn'])}
            >
                Try Again
            </button>
        </div>
    );
}

export default Reset;
