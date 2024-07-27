import React from 'react';

const HelloWorld = () => {
    
    function sayHello() {
        alert('Hello, React!');
    }

    return (
        <button onClick={sayHello}>Click Me!</button>
    );
};

export default HelloWorld;