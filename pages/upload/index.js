import React, { useState } from "react";
import { CloudinaryContext, Image as CloudinaryImage } from "cloudinary-react";
import UploadWidget from "@/components/UploadWidget";

function Upload() {
  const [uploadedCarImages, setUploadedCarImages] = useState([]);
  const [uploadedSportsImages, setUploadedSportsImages] = useState([]);

  const handleCarUpload = (error, result) => {
    if (result.event === "success") {
      setUploadedCarImages((prev) => {
        return [...prev, result.info.public_id];
      });
    }
  };

  const handleSportsUpload = (error, result) => {
    if (result.event === "success") {
      setUploadedSportsImages((prev) => {
        return [...prev, result.info.public_id];
      });
    }
  };

  return (
    <div className="pt-32 pb-4">
      <div>
        <h1> Upload for cars</h1>
        <UploadWidget onUpload={handleCarUpload} multiple folder="cars">
          {({ open }) => (
            <button
              onClick={open}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Upload Cars
            </button>
          )}
        </UploadWidget>

        <div className="flex flex-wrap">
          {uploadedCarImages.map((publicId, index) => (
            <div key={index} className="w-1/3 p-4">
              <CloudinaryContext cloudName="dpivcgllr">
                <CloudinaryImage publicId={publicId} />
              </CloudinaryContext>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1> Upload for sports</h1>
        <UploadWidget onUpload={handleSportsUpload} multiple folder="sports">
          {({ open }) => (
            <button
              onClick={open}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Upload Sports
            </button>
          )}
        </UploadWidget>

        <div className="flex flex-wrap">
          {uploadedSportsImages.map((publicId, index) => (
            <div key={index} className="w-1/3 p-4">
              <CloudinaryContext cloudName="dpivcgllr">
                <CloudinaryImage publicId={publicId} />
              </CloudinaryContext>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upload;
