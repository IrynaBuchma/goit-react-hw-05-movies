import css from './Error..module.css';
import PropTypes from 'prop-types';

export default function ErrorComponent({ message }) {
    return (
        <div role='alert' className={css.wrapper}>
            <p text={message} className={css.text}>
                {message}
            </p>
        </div>
    )
}

Error.propTypes = {
    textError: PropTypes.string.isRequired,
}