import React from 'react';
import loading from './icons8-spinner.gif';

export default function Spinner() {
    return (
      <div className='text-center my-3' >
        <img src={loading} alt="loading..." />
      </div>
    )
}
