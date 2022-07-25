import React from 'react';

const Resume = () => {
    return (
        <embed
            src={`${process.env.PUBLIC_URL}/resume/cv.pdf`}
            type="application/pdf"
            frameBorder="0"
            scrolling="auto"
            height="1000px"
            width="100%"
        ></embed>
    )
}

export default Resume