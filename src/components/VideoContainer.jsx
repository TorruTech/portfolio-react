// src/components/VideoContainer.js
import React from 'react';

export const VideoContainer = () => {
  return (
    <div className="video-container" id="video">
      <video controls autoPlay muted loop>
        <source src="./video/video.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};
