import React from 'react';
import './global.css';

import Routes from './routes';

function App(){
 
    return(
        <Routes/>
    );
}

export default App;

/**
 * Exemplo de estado no react
 * import React, { useState} from 'react';
import Header from 'Header';

 * function App(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }
    
    return(
        <div>
            <Header>Contando: {counter}</Header>
            <button onClick = {increment}>Botandomore</button>
        </div>
    );
}
 */