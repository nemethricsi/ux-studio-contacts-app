'use client';

import Button from '@/app/_ui/button';
import { Input } from '@headlessui/react';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface ImageUploadFielProps {
  handleChangeImage: (file: File | null) => void;
  existingImageUrl?: string;
  markImageForDeletion?: () => void;
}

const ImageUploadField = ({ handleChangeImage, existingImageUrl, markImageForDeletion }: ImageUploadFielProps) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(existingImageUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleChangeImage(file);
      const imageURL = URL.createObjectURL(file);
      setSelectedImageUrl(imageURL);

      return () => URL.revokeObjectURL(imageURL);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleRemoveSelection = () => {
    setSelectedImageUrl(null);
    handleChangeImage(null);

    if (existingImageUrl) {
      if (typeof markImageForDeletion === 'function') {
        markImageForDeletion();
      }
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="h-[88px] w-[88px] rounded-full bg-grey-70 p-px">
        <Image
          src={selectedImageUrl || '/images/default.png'}
          alt="user avatar"
          width={100}
          height={100}
          className="w-full rounded-full"
        />
      </div>
      <div className="flex gap-2">
        <Input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        <Button
          variant="primary"
          label={`${selectedImageUrl ? 'Change' : 'Add'} picture`}
          iconId={selectedImageUrl ? 'change' : 'add'}
          onClick={handleButtonClick}
        />
        {selectedImageUrl && (
          <Button variant="primary" label="Delete picture" iconId="delete" iconOnly onClick={handleRemoveSelection} />
        )}
      </div>
    </div>
  );
};

export default ImageUploadField;
