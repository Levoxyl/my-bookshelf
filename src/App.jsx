import React, { useState } from 'react';
import BookcaseCanvas from './components/BookcaseCanvas';
import CustomizerPanel from './components/CustomizerPanel';

function App() {
  const [bookData, setBookData] = useState({
    title: "The World of Yesterday",
    pageCount: 680,
    customWidth: 14.0,
    customHeight: 22.0,
    spineColor: "#8e44ad",
  });

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      {/* LAYER 1: The UI Sidebar Control Board */}
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '20px', 
        zIndex: 999, // Floating on top layer
        pointerEvents: 'auto' 
      }}>
        <CustomizerPanel bookData={bookData} setBookData={setBookData} />
      </div>

      {/* LAYER 2: The 3D Render Window Container */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 1 // Sitting in background layer
      }}>
        <BookcaseCanvas bookData={bookData} />
      </div>

    </div>
  );
}

export default App;