import "./Place.css";
import { Form, redirect } from "react-router-dom";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData()
  console.log(formData)
  const images = formData.getAll('images')

  return redirect(".")
 
}

import React, { useState } from 'react';

export default function Place() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedImages(files);
    }
  };


  return (

    
    <div>
        <div className="image-preview">
          {selectedImages.map((image, index) => (
            <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} />
          ))}
        </div>

      <Form method="post" encType="multipart/form-data" className="place-form">
        <input
          type="file"
          accept="image/*"
          name="images"
          multiple
          onChange={handleImageChange}
        />
        <button type="submit">Submit</button>
      </Form>
     
    </div>
  );
}
