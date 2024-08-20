import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [maxSizeMB, setMaxSizeMB] = useState(0.05);
  const [loading, setLoading] = useState(false);
  const [showCompressedImage, setShowCompressedImage] = useState(false);

  const handleImageChange = async (e) => {
    const imageFile = e.target.files[0];
    setOriginalImage(URL.createObjectURL(imageFile));
    setLoading(true);
    setShowCompressedImage(false); // Hide compressed image initially

    try {
      const options = {
        maxSizeMB: maxSizeMB,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(imageFile, options);
      setCompressedImage(URL.createObjectURL(compressedFile));
    } catch (error) {
      console.error("Image compression error:", error);
    } finally {
      setLoading(false); // Set loading state to false when compression is done
    }
  };

  const handleMaxSizeChange = (e) => {
    const maxSize = parseFloat(e.target.value);
    setMaxSizeMB(maxSize);
  };

  const handleDownload = () => {
    // Download image and show compressed image
    setShowCompressedImage(true);
  };

  const downloadHandler = () => {
    // Clear images and reset input
    setOriginalImage(null);
    setCompressedImage(null);
    setShowCompressedImage(false);
    document.getElementById("img-input").value = "";
  };

  return (
    <div id="image-compressor" className="container-fluid img-comp">
      <div className="text-center">
        <h5 className="card-head my-2">Image Compressor</h5>
        <h5 className="mb-4">
          Compress JPG, PNG, SVG or GIF with the best quality and compression.{" "}
          <br />
          Reduce the filesize of your images at once.
        </h5>
      </div>

      <h5>Upload Image:</h5>
      <input
        type="file"
        id="img-input"
        onChange={handleImageChange}
        className="form-control mb-3"
      />
      <div className="mb-3">
        <label htmlFor="maxSizeInput" className="form-label fw-bold">
          Max Size (MB):
        </label>
        <input
          type="number"
          id="maxSizeInput"
          value={maxSizeMB}
          onChange={handleMaxSizeChange}
          className="form-control"
        />
      </div>

      {loading && <div className="text-center">Compressing image...</div>}

      {compressedImage && (
        <div className="text-center">
          <a
            href={compressedImage}
            download="compressed_image.jpg"
            className="download-btn mb-3"
            onClick={handleDownload}
          >
            Download Image
          </a>
        </div>
      )}

      {showCompressedImage && compressedImage && (
        <div className="text-center mt-3">
          <h5>Compressed Image:</h5>
          <img
            src={compressedImage}
            alt="Compressed"
            className="img-fluid comp-img"
          />
        </div>
      )}
    </div>
  );
};

export default ImageCompressor;
