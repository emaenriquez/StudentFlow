
import PropTypes from 'prop-types';
const ButtonForm = ({ text, onClick, className }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
            >
                {text}
            </button>
        </div>
    )
}

ButtonForm.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default ButtonForm