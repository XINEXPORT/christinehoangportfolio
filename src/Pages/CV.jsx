import React, { useState } from "react";

const CV = () => {
  const [loadError, setLoadError] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {loadError ? (
        <div className="text-center">
          <h1 className="text-xl font-bold text-red-600">
            Error Loading Document
          </h1>
          <p className="text-gray-600">
            The document could not be loaded. Please try viewing the document on
            desktop.
          </p>
        </div>
      ) : (
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSvDuo3F-f3l_tItw8q6zA8houmM7dII_mZbgvNPcFpLdBMyvKqXBSG3r3dJbG1rcOq7vaX8QeKXUJ5/pub?embedded=true"
          className="w-full h-full max-w-4xl max-h-screen border-0"
          title="CV Document"
          allowFullScreen
          onError={() => setLoadError(true)}
        ></iframe>
      )}
    </div>
  );
};

export default CV;
