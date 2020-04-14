import React from 'react';

const Error = ({message}) =>
    message ? (
        <div className="text-sm text-red-600 font-bold">{message}</div>
    ) : (
        <div className="text-sm text-green-600 font-bold">All Good</div>
    )

export default Error;