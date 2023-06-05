import React, { useState } from "react";
import { CloudinaryContext, Image as CloudinaryImage } from "cloudinary-react";
import UploadWidget from "@/components/UploadWidget";

function Upload() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [uploadedCarImages, setUploadedCarImages] = useState([]);
  const [uploadedSportsImages, setUploadedSportsImages] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === process.env.NEXT_PUBLIC_USERNAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

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

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleLogin}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login, Owen
            </button>
          </div>
        </form>
      </div>
    );
  }


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
              <CloudinaryContext
                cloudName={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`}
              >
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
              <CloudinaryContext
                cloudName={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`}
              >
                <CloudinaryImage publicId={publicId} />
              </CloudinaryContext>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1> Upload for misc</h1>
        <UploadWidget onUpload={handleSportsUpload} multiple folder="misc">
          {({ open }) => (
            <button
              onClick={open}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Upload Misc
            </button>
          )}
        </UploadWidget>

        <div className="flex flex-wrap">
          {uploadedSportsImages.map((publicId, index) => (
            <div key={index} className="w-1/3 p-4">
              <CloudinaryContext
                cloudName={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`}
              >
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
