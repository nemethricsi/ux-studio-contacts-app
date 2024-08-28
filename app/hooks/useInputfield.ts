import { useState } from 'react';

export const useInputField = (initialValue = ''): [string, (_: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => event.target.value);
  };

  return [value, handleChange];
};
