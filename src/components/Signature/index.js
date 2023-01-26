import React, { useRef, useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './signature.scss';

export const Signature = () => {

  const sigRef = useRef()
  const [signature, setSignature] = useState(null);
  const handleSignatureEnd = () => {
    setSignature(sigRef.current.toDataURL());
  }
  const clearSignature = () => {
    sigRef.current.clear();
    setSignature(null);
  }

  useEffect(() => {
    console.log(signature);
  }, [signature]);

  return (
    <div>
      <SignatureCanvas 
        penColor="black"
        canvasProps={{className: 'signature'}}
        ref={sigRef}
        onEnd={handleSignatureEnd}
      />
      <button onClick={clearSignature}>Clear</button>
    </div>
  )
} 