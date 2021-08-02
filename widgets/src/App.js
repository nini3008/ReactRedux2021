import React, { useEffect, useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: "The color Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "Blue"
    }

]

const App = () => {
    // const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* {showDropDown ?
                <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
                : null
            } */}
            <Translate />

        </div>
    );
}

export default App;