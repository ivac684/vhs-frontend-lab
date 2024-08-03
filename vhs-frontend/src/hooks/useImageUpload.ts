import { useState } from 'react';

const useImageUpload = (initialImage: File | string | null = null) => {
  const [selectedImage, setSelectedImage] = useState<File | string | null>(initialImage);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedImage(file);
  };

  const clearImage = () => {
    setSelectedImage(null);
  };

  return {
    selectedImage,
    handleImageChange,
    clearImage,
  };
};

export default useImageUpload;
