// import React from "react";

// const ImageHoverZoom = ({ imagePath }) => {
//   return (
//     <div className="img-wrapper">
//       <img src={imagePath} alt="" className="hover-zoom" />
//     </div>
//   );
// };
// export default ImageHoverZoom;

// import React from 'react'
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

// const MyComponent = () => (
//   <Zoom>
//     <img
//       alt="bambang"
//       src="/path/to/bs.jpeg"
//       width="500"
//     />
//   </Zoom>
// )

// export default MyComponent

import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const MyComponent = () => {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <img
        alt="that wanaka tree"
        onLoad={handleImgLoad}
        src="/path/to/thatwanakatree.jpg"
        width="500"
      />
    </ControlledZoom>
  )
  }

export default MyComponent