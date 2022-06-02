import React, { useEffect, useRef } from 'react';
import '../qr/qr.css';
import QRCode from 'qrcode'

function Qr() {
  const qrCanvas = useRef();

  useEffect(() => {
    QRCode.toCanvas(qrCanvas.current,'https://plicar.io/')
  },[]);

  return (
    <section className='qr'>
      <h1 className="qr-txt">스마트폰을 통해 스캔 해주세요.</h1>
      <div className="qr-wrrapper">
        <canvas className="qr-canvas" ref={qrCanvas}></canvas>
      </div>
      <p className="qr-info">스마트폰 기본 카메라 앱에서</p>
      <p className="qr-info">아래의 QR을 비춘 후 뜨는 링크를 눌러주세요.</p>
      <button className='qr-btn'>QR코드 이미지 다운받기</button>
      <p className="qr-info">*AR기능은 현재 아래의 기기에서만 정상 작동 합니다.</p>
      <div className="info-box">
        <p className="qr-info">iPhone: iOS 12이상</p>
        <p className="qr-info">Android: 8.0+ 이상 ARCore 1.9 지원기기</p>
      </div>
    </section>
  );
}

export default Qr;