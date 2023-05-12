import React from 'react';

const st = process.env.PUBLIC_URL;

function ErrorPage() {
    return (
        <>
            <h1>Error :( {st}</h1>
        </>
    );
}

export default ErrorPage;