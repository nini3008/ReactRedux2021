import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedtext] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedtext(text)
        }, 500)
        return () => {
            clearTimeout(timerId)
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                },
            });

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();

    }, [language, debouncedText])

    return (
        <div>
            <div className="ui header">
                {translated}
            </div>
        </div>
    );
}

export default Convert;