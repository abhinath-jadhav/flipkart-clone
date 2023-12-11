import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedImages((prevImages) => [...prevImages, ...Array.from(files)]);
    }
  };

  const handleUpload = async () => {
    if (selectedImages.length > 0) {
      const formData = new FormData();
      selectedImages.forEach((image) => {
        formData.append(`images`, image);
      });

      try {
        const response = await axios.post(
          "http://localhost:8081/flipkart/upload",
          formData
        );
        console.log(response);

        if (response.status) {
          console.log("Images uploaded successfully");
        } else {
          console.error("Failed to upload images");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("No images selected");
    }
  };
  return <div>AddProduct</div>;
};

export default AddProduct;
