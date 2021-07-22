import React, { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    console.log('i run with every render')

    useEffect(() => {
        console.log('i only run once and every intitals')
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        type="text"
                        className="input"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;