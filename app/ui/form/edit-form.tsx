'use client';

import { useContacts } from '@/app/hooks/useContacts';
import { useInputField } from '@/app/hooks/useInputfield';
import Button from '@/app/ui/button';
import ImageUploadField from '@/app/ui/form/image-upload-field';
import InputField from '@/app/ui/input-field';
import Text from '@/app/ui/text';
import { Fieldset, useClose } from '@headlessui/react';
import type { Contact } from '@prisma/client';
import { useState } from 'react';

const EditForm = ({ contact }: { contact: Contact }) => {
  const close = useClose();
  const { updateContactMutation } = useContacts();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [name, setName] = useInputField(contact.name);
  const [phoneNumber, setPhoneNumber] = useInputField(contact.phoneNumber || '');
  const [email, setEmail] = useInputField(contact.email || '');
  const [shouldDeleteImage, setShouldDeleteImage] = useState(false);

  const handleChangeImage = (file: File | null) => {
    setSelectedImage(file);
  };

  const markImageForDeletion = () => {
    setShouldDeleteImage(true);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phoneNumber', phoneNumber);
      formData.append('email', email);

      if (selectedImage) {
        formData.append('image', selectedImage);
        formData.append('shouldDeleteImage', 'true');
      }

      if (shouldDeleteImage) {
        formData.append('shouldDeleteImage', 'true');
      }

      updateContactMutation.mutate({ id: contact.id, formData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fieldset className="w-[364px] p-6">
      <form className="flex flex-col gap-6 bg-grey-100">
        <Text variant="h2">Edit Contact</Text>
        <ImageUploadField
          handleChangeImage={handleChangeImage}
          existingImageUrl={contact.imageUrl || ''}
          markImageForDeletion={markImageForDeletion}
        />
        <InputField label="Name" id="name" placeholder="Jamie Wright" value={name} onChange={setName} />
        <InputField
          label="Phone number"
          id="phoneNumber"
          placeholder="+01 234 5678"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <InputField
          label="Email address"
          id="emailAddress"
          type="email"
          placeholder="jamie.wright@mail.com"
          value={email}
          onChange={setEmail}
        />
      </form>
      <div className="flex items-center justify-end gap-2 pt-12">
        <Button variant="secondary" label="Cancel" onClick={close} />
        <Button variant="primary" label="Done" onClick={handleSubmit} />
      </div>
    </Fieldset>
  );
};

export default EditForm;
