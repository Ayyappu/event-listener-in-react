import React from 'react';
import TextBox from './components/text-box';
import './App.css';

var originalSetItem: any = localStorage.setItem;
localStorage.setItem = function(key, value) {
  var event: any = new Event('itemInserted');
  event.value = value; // Optional..
  event.key = key; // Optional..
  document.dispatchEvent(event);
  originalSetItem.apply(this, arguments);
};

const App = () => {
  const [currentKey, setCurrentKey] = React.useState(0);  

  const handleKeyDown = (event: any) => {
    setCurrentKey(event.keyCode);
  };
  
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='container'>
      {currentKey}
      <br/>
      <TextBox />      
    </div>
  );
};

export default App;
