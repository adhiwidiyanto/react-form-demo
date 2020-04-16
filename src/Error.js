import React from 'react';

const Error = ({touched, message}) => {

  if(!touched) {
    return <div className="text-sm text-red-600 font-bold">&nbsp;</div>
  }

  if(message) {
    return <div className="text-sm text-red-600 font-bold">{message}</div>
  }

  return false;
}

export default Error;
