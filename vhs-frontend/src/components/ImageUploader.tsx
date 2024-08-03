import useImageUpload from '@/hooks/useImageUpload';
import React from 'react';

interface ImageUploaderProps {
  initialImage?: File | string | null;
  onImageSelect: (file: File | null) => void;
}

const ImageUploader = ({ initialImage = null, onImageSelect }: ImageUploaderProps) => {
  const { selectedImage, handleImageChange, clearImage } = useImageUpload(initialImage);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImageChange(event);
    const file = event.target.files?.[0] || null;
    onImageSelect(file);
  };

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="Selected"
            width={"250px"}
            src={typeof selectedImage === 'string' ? selectedImage : URL.createObjectURL(selectedImage)}
          />
          <br /> <br />
          <button onClick={() => { clearImage(); onImageSelect(null); }}>Remove</button>
        </div>
      )}
      <br />
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUploader;
