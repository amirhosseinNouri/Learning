import React from 'react';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

function BoxRipple() {
  const rippleRef = React.useRef(null);
  const onRippleStart = (e: any) => {
    rippleRef.current!.start(e);
  };
  const onRippleStop = (e: any) => {
    rippleRef.current!.stop(e);
  };

  return (
    <React.Fragment>
      <div
        onMouseDown={onRippleStart}
        onMouseUp={onRippleStop}
        style={{
          display: 'inline-block',
          padding: 8,
          position: 'relative',
          border: 'black solid 1px',
        }}
      >
        Button
        <TouchRipple ref={rippleRef} center={false} />
      </div>
    </React.Fragment>
  );
}
export default BoxRipple;
