import React from 'react';

export default function CustomizerPanel({ bookData, setBookData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Check that setBookData exists before running to avoid runtime crashes
    if (setBookData) {
      setBookData((prev) => ({
        ...prev,
        [name]: name === 'pageCount' || name === 'customWidth' || name === 'customHeight' 
          ? Number(value) 
          : value
      }));
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '24px',
      left: '24px',
      width: '340px',
      background: '#1a1a1a',
      border: '2px solid #444',
      padding: '24px',
      borderRadius: '12px',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      zIndex: 99999,
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    }}>
      <h2 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>Book Generator</h2>
      <hr style={{ borderColor: '#444', marginBottom: '15px' }} />
      
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Book Title</label>
        <input 
          type="text" 
          name="title" 
          value={bookData.title} 
          onChange={handleChange} 
          style={inputStyle}
        />
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Page Count ({bookData.pageCount} pages)</label>
        <input 
          type="range" 
          name="pageCount" 
          min="50" 
          max="1200" 
          value={bookData.pageCount} 
          onChange={handleChange} 
          style={{ width: '100%', accentColor: '#8e44ad' }}
        />
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Height ({bookData.customHeight} cm)</label>
        <input 
          type="range" 
          name="customHeight" 
          min="10" 
          max="40" 
          step="0.5"
          value={bookData.customHeight} 
          onChange={handleChange} 
          style={{ width: '100%', accentColor: '#8e44ad' }}
        />
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Width ({bookData.customWidth} cm)</label>
        <input 
          type="range" 
          name="customWidth" 
          min="10" 
          max="30" 
          step="0.5"
          value={bookData.customWidth} 
          onChange={handleChange} 
          style={{ width: '100%', accentColor: '#8e44ad' }}
        />
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Spine & Back Color</label>
        <input 
          type="color" 
          name="spineColor" 
          value={bookData.spineColor} 
          onChange={handleChange} 
          style={{ ...inputStyle, padding: '0', height: '40px', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

const inputGroupStyle = {
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px'
};

const labelStyle = {
  fontSize: '12px',
  color: '#aaa',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const inputStyle = {
  background: '#2a2a2a',
  border: '1px solid #555',
  color: '#fff',
  padding: '12px',
  borderRadius: '6px',
  fontSize: '16px',
  width: '100%',
  outline: 'none',
};