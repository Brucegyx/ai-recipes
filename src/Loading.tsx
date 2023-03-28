import React, { ConsumerProps, ReactElement } from 'react';
import './Loading.css';

const Loading = ({status}:{status: boolean}): ReactElement => {
  return (
    <>
    {status && 
      <div className='h-2/5  w-full block my-5 mx-auto text-center'>
        <div className='my-5 text-xl md:text-3xl p-3 font-extrabold text-red-500'>Your Receipe is being generated!</div>
        <div className='h-max w-max bg-gray-600 px-2 py-2 md:p-5 loader'></div>
      </div>
    }
    </>
  );
}

export default Loading;