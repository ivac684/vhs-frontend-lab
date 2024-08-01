import React, { useState } from 'react';

type UploadAndDisplayImageProps = {
  onImageSelect: (file: File | null) => void;
};

const UploadAndDisplayImage = ({ onImageSelect }: UploadAndDisplayImageProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedImage(file);
    onImageSelect(file);
  };

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br /> <br />
          <button onClick={() => {
            setSelectedImage(null);
            onImageSelect(null);
          }}>Remove</button>
        </div>
      )}
      <br />
      <input
        type="file"
        name="myImage"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
