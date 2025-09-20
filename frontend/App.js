    // const heading =createElement('h1', {id:"heading-1"}, 'Hello, React!');
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(heading);

//     const heading =React.createElement(
//      "div", 
//      {id:parent},          
//    React.createElement( 'h1', {id:"heading-1"}, 'Hello, Yashita!')
//     );
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(heading);

import React from "react";
import ReactDOM from "react-dom";
    const heading =React.createElement(
     "div", 
     {id:parent,key:1},    
   React.createElement( 'h1', {id:"child",key:2}, React.createElement('h1', {id:"heading-1",key:3},'Hello, Yashita!')
    )
    );
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);
