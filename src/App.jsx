import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            {[1, 2, 3, 4].map((el, index) => {
                return <span key={index}>{el}</span>;
            })}
        </div>
    );
}

export default App;
