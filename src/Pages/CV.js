import React from 'react';
import { cvDetails } from '../Details';

const CV = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <embed
                src={cvDetails.cvUrl}
                type="application/pdf"
                className="border-none w-full h-full max-w-4xl max-h-screen"
                scrolling="auto"
            />
        </div>
    );
};

export default CV;
