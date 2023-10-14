'use client';
import { Button } from 'antd';
import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  console.log(imgSrc);

  return (
    <>
    <div className="my-12 border-2 border-[#7076FE]">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam ref={webcamRef} mirrored={true} screenshotFormat='image/jpeg' screenshotQuality={1}/>
      )}
    </div>
    <div className='flex flex-row gap-2 justify-between'>
      {imgSrc ? (
        <Button type='primary' className='flex-1' onClick={retake}>Retake Photo</Button>
      ) : (
        <Button type='primary' className='flex-1' onClick={capture}>Capture Photo</Button>
      )}
      <Button type='default' className='flex-1 text-white' style={{backgroundColor: "#87d068", color: "#fff"}}>Upload Photo</Button>
    </div>
    </>
  )
}

export default Camera