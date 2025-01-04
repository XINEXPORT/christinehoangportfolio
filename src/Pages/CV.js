import React from 'react';

const CV = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <iframe 
                src="https://docs.google.com/document/d/e/2PACX-1vSk3gaH4mUdaL6bgw4IFBWoUbyetsyGKxh02yw0NFJpSwKFLVz7vP7-euH8Qt6V3feCjjjfHLkrYvxM/pub?embedded=true"
                className="w-full h-full max-w-4xl max-h-screen border-0"
                title="CV Document"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default CV;
