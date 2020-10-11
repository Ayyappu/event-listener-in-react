import React from 'react';
import '../App.css';

const DisplayStorage = () => {
    const [textBoxValue, setTextBoxValue] = React.useState("");
    
    var localStorageSetHandler = function(e: any) {
        console.log(1);
        setTextBoxValue(e.value);
        console.log(e.value);
      };      

    React.useEffect(() => {
        document.addEventListener("itemInserted", localStorageSetHandler, false);
        return () => {
            document.addEventListener("itemInserted", localStorageSetHandler, false);
        };
      }, []);
    
    return (
        <div className='display-storage-container'>
            {textBoxValue}      
        </div>
    );
};

export default DisplayStorage;
