'use client';

import { useContacts } from '@/app/hooks/useContacts';
import { useInputField } from '@/app/hooks/useInputfield';
import Button from '@/app/ui/button';
import ImageUploadField from '@/app/ui/form/image-upload-field';
import InputField from '@/app/ui/input-field';
import Text from '@/app/ui/text';
import { Fieldset } from '@headlessui/react';
import { useState } from 'react';

const CreateForm = () => {
  const { createContactMutation } = useContacts();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [name, setName] = useInputField('');
  const [phoneNumber, setPhoneNumber] = useInputField('');
  const [email, setEmail] = useInputField('');

  const handleChangeImage = (file: File | null) => {
    setSelectedImage(file);
  };

  const requestBody = {
    name,
    phoneNumber,
    email,
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    createContactMutation.mutate(requestBody);
  };

  return (
    <Fieldset className="w-[364px] border border-white p-6">
      <form className="flex flex-col gap-6 bg-grey-100">
        <Text variant="h2">Add Contact</Text>
        <ImageUploadField handleChangeImage={handleChangeImage} />
        <InputField
          label="Name"
          id="name"
          required
          value={name}
          onChange={setName}
        />
        <InputField
          label="Phone number"
          id="phoneNumber"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <InputField
          label="Email Address"
          id="emailAddress"
          type="email"
          value={email}
          onChange={setEmail}
        />
      </form>
      <div className="flex items-center justify-end gap-2 pt-12">
        <Button variant="secondary" label="Cancel" />
        <Button variant="primary" label="Done" onClick={handleSubmit} />
      </div>
    </Fieldset>
  );
};

export default CreateForm;
