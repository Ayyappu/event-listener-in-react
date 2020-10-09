import React from 'react';
import './App.css';

const App = () => {

  const [currentKey, setCurrentKey] = React.useState(0);

  const handleKeyDown = (event: any) => {
    setCurrentKey(event.keyCode);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='container'>
      {currentKey}      
    </div>
  );
};

export default App;
