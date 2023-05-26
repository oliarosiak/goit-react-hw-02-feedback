import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={css.block}>
        {options.map(option => (
            <button className={css.button} key={option} type="button" onClick={() => onLeaveFeedback(option)}>
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
