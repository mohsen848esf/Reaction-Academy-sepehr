import React from 'react';
import Typing from 'react-typing-animation';

const TextAnimator = ({ children }) => {
  return (
    <Typing speed={50}>
      {children}
    </Typing>
  );
}

export default TextAnimator;
