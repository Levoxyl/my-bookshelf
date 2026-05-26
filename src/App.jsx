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
      
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '20px', 
        zIndex: 999,
        pointerEvents: 'auto' 
      }}>
        <CustomizerPanel bookData={bookData} setBookData={setBookData} />
      </div>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 1
      }}>
        <BookcaseCanvas bookData={bookData} />
      </div>

    </div>
  );
}

export default App;