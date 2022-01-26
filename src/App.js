import React, { useRef, useEffect } from 'react';
import './style.css';
import Topbar from './Topbar/Topbar';

export default function App() {
  const heightRef = useRef(null);

  useEffect(() => {
    console.log(heightRef.current);
  });

  return (
    <div>
      <Topbar ref={heightRef} />
    </div>
  );
}
