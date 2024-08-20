import React, { useState } from "react";

const Youtube = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleFetchClick = () => {
    if (!videoUrl) return;

    const id = extractVideoId(videoUrl);
    if (id) {
      setThumbnailUrl(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);
    } else {
      alert("Invalid YouTube URL");
    }
  };

  const handleDownloadClick = () => {
    if (!thumbnailUrl) return;

    const link = document.createElement("a");
    link.href = thumbnailUrl;
    link.download = "thumbnail.jpg"; // This attribute forces download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="yt-thumbnail-downloader" className="container-fluid ytcomp">
      <div className="text-center">
        <h5 className="card-head my-2">YouTube Thumbnail Downloader</h5>

        <h5 className="mb-4">
          Enter the YouTube video URL and click on the "Fetch Thumbnail" button
          to get the thumbnail image.
        </h5>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          value={videoUrl}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter YouTube video URL"
        />
        <button
          className="download-btn"
          type="button"
          onClick={handleFetchClick}
          disabled={!videoUrl}
        >
          Fetch Thumbnail
        </button>
      </div>
      {thumbnailUrl && (
        <div>
          <p>Your Thumbnail is ready!</p>
          <img
            src={thumbnailUrl}
            alt="Thumbnail"
            className="img-fluid rounded-5"
            crossOrigin="anonymous"
          />
          <button
            className="download-btn mt-3"
            type="button"
            onClick={handleDownloadClick}
          >
            Download Image
          </button>
        </div>
      )}
    </div>
  );
};

export default Youtube;
