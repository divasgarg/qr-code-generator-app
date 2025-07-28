import React, { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function App() {
  const [text, setText] = useState('');
  const qrRef = useRef();

  const handleDownload = () => {
    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qr-code.png';
      link.click();
    }
  };

  return (
    <div style={styles.container}>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        style={styles.input}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ margin: 20 }} ref={qrRef}>
        {text ? (
          <QRCodeCanvas value={text} size={256} />
        ) : (
          <div style={{
            height: 256,
            width: 256,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #eee"
          }}>
            QR code preview
          </div>
        )}
      </div>
      <button style={styles.button} onClick={handleDownload} disabled={!text}>
        Download QR Code
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 60,
    fontFamily: "sans-serif"
  },
  input: {
    width: 300,
    fontSize: 18,
    padding: 8,
    marginBottom: 12
  },
  button: {
    padding: "10px 24px",
    fontSize: 17,
    background: "#3477e3",
    color: "#fff",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    marginTop: 12
  }
};

export default App;
