import React from 'react';

const CV = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <iframe 
                src="https://docs.google.com/document/d/e/2PACX-1vSvDuo3F-f3l_tItw8q6zA8houmM7dII_mZbgvNPcFpLdBMyvKqXBSG3r3dJbG1rcOq7vaX8QeKXUJ5/pub?embedded=true"
                className="w-full h-full max-w-4xl max-h-screen border-0"
                title="CV Document"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default CV;
