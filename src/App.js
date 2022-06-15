import "./App.css";
import React, { useState } from "react";
import QRCode from "react-qr-code";

function App() {

  const [ qr, setQr] = useState('')
  

  return (
      <div className="container">
      <h1>Qr code generator</h1>
      <div className="qrCode-border" style={{ background: 'white', padding: '16px' }}>
        <QRCode value={qr} />
      </div>
      <input placeholder="Hello World!" type="text" onChange={(e) => setQr(e.target.value)} />
    </div>
  )
}

export default App;
