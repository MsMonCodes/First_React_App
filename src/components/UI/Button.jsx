import './Button.css';

export const Button = ({ text, clickFn }) => {
    return (
        <>
            <button className='Button' onClick={clickFn}>
                {text}
            </button>
        </>
    );
};