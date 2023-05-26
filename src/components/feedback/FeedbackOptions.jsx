import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map(option => (
            <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
                {option.toUpperCase()}
            </button>
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
