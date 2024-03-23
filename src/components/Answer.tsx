import Answer_module from './Answer.module.scss';
type Props = {
    onPress: () => void;
    test: string;
    color?: string;
    disabled?: boolean;
};

// Displays the answer choices with style tag
function Answer(props: Props) {
    const style = props.color ? { color: props.color } : {};

    return (
        <button onClick={props.onPress} disabled={props.disabled} className={Answer_module.answer}>
            <span style={style}>{props.test}</span>
        </button>
    );
}

export default Answer;
