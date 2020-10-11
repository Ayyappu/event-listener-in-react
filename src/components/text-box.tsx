import React from 'react';
import DisplayStorage from './display-storage';
import '../App.css';

const TextBox = () => {
    const handleTextBoxValueChange = (event: any) => {
        localStorage.setItem('textboxvalue', event.target.value);
    };

    React.useEffect(() => {
        window.addEventListener('input', handleTextBoxValueChange);

        // cleanup this component
        return () => {
            window.removeEventListener('input', handleTextBoxValueChange);
        };
    }, []);

    return (
        <div className='text-box-container'>
            <input type="text"></input>
            <br />
            <DisplayStorage />
        </div>
    );
};

export default TextBox;
