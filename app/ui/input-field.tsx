import type { InputProps } from '@headlessui/react';
import { Field, Input, Label } from '@headlessui/react';
import { useId } from 'react';

interface InputFieldProps extends InputProps {
  label: string;
}

const InputField = ({ label, placeholder, ...props }: InputFieldProps) => {
  const id = useId();

  return (
    <Field className="flex flex-col gap-1">
      <Label htmlFor={id} className="text-secondary text-xs font-normal leading-3 tracking-[0.01em]">
        {label}
      </Label>
      <Input
        id={id}
        placeholder={placeholder}
        className="placeholder:text-disabled block w-full rounded-lg border-none bg-grey-80 px-3 py-2 text-sm outline outline-1 -outline-offset-2 outline-grey-60 focus:outline-none data-[focus]:bg-grey-60 data-[focus]:outline-1 data-[focus]:-outline-offset-2 data-[hover]:-outline-offset-2 data-[focus]:outline-grey-10 data-[hover]:outline-grey-30"
        {...props}
      />
    </Field>
  );
};

export default InputField;
