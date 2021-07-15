import React, { useState, useImperativeHandle, forwardRef } from 'react';

function Input(props, ref) {
  const [value, setValue] = useState('');

  useImperativeHandle(ref, () => ({ reset }));

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const reset = () => setValue('');

  return <input type="text" value={value} onChange={handleChange} />;
}

export default forwardRef(Input);
