import PropTypes from "prop-types";

const Logo = ({ cafeName, cafeSlogan }) => (
    <div>
        <h1>{cafeName}</h1>
        <p>{cafeSlogan}</p>
    </div>
);

Logo.propTypes = {
    cafeName: PropTypes.string.isRequired,    
    cafeSlogan: PropTypes.string.isRequired,    
};

export default Logo;