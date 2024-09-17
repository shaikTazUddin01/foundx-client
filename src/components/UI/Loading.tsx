import { Spinner } from '@nextui-org/react';
import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen fixed bg-black/10 inset-0 backdrop-blur-md z-[999] flex justify-center items-center">
      <Spinner size="lg"></Spinner>
      </div>
    );
};

export default Loading;