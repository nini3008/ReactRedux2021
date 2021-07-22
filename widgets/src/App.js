import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: "what is React?",
        content: "React is a front end JS framework"
    },
    {
        title: "Why use React?",
        content: "React is a favourite JS Library  among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by Creating components"
    }
]

const App = () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    );
}

export default App;