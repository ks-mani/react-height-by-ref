import React from 'react';

function Topbar(props, ref) {
  return (
    <div ref={ref} style={{ height: '50px', backgroundColor: 'red' }}></div>
  );
}

export default React.forwardRef(Topbar);
