import React, { useRef, useEffect } from 'react';
import './style.css';
import Topbar from './Topbar/Topbar';

export default function App() {
  const heightRef = useRef(null);

  useEffect(() => {
    console.log(heightRef.current.offsetHeight);
  });

  return (
    <div ref={heightRef}>
      <Topbar />
    </div>
  );
}
