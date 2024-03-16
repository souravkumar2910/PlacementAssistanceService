import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
// import FirstTemplate from './firstTemplate/FirstTemplate';
import {FirstTemplate} from './firstTemplate/FirstTemplate'


const PrintResume = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
      <div>
        <FirstTemplate ref={componentRef} />
        <button onClick={handlePrint}>Print this out!</button>
      </div>
    );
};

export default PrintResume