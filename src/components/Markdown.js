import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Helmet } from "react-helmet"

function Markdown({ route }) {
    let { label, source } = route
    const [mdText, setMdText] = useState('');

    useEffect(() => {
        fetch(source?.default).then(res => res.text())
            .then(text => setMdText(text))
            .catch((error) => console.error(error));
    }, [source])

    return (
        <>
            <Helmet encodeSpecialCharacters titleTemplate="%s | Core Building Protection">
                <title>{label ?? 'Welcome'}</title>
            </Helmet>
            <ReactMarkdown className='content'>{mdText}</ReactMarkdown>
        </>
    )
}

export default Markdown