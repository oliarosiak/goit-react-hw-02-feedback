
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map(option => (
            <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
                {option.toUpperCase()}
            </button>
        ))}
    </div>
);

export default FeedbackOptions;
