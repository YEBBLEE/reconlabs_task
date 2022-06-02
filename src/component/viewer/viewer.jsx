import React, { useEffect, useState } from 'react';
import '../viewer/viewer.css';
import chair from '../../assets/3dModel/Chair.glb';
import cube from '../../assets/3dModel/cube.glb';
import mixer from '../../assets/3dModel/Mixer.glb';
import toyCar from '../../assets/3dModel/ToyCar.glb';
import View3D from '@egjs/view3d';

function Viewer({onModalClick}) {
  const assets = [chair, cube, mixer, toyCar];
  const [randomAsset] = useState(pickRandomAsset()); 

  useEffect(() => {
    new View3D('#wrapper-el', {
      src : randomAsset,
    });
  },[]);

  function pickRandomAsset() {
    const asset = assets[Math.floor(Math.random() * assets.length)];
    return asset;
  }

  function copyLink() {
    navigator.clipboard.writeText(window.location.href)
    .then(alert('URL이 클립보드에 저장되었습니다.'));
  }

  function handleInfoBtn() {
    onModalClick();
  }
  
  return (
    <section className="viewer">
      <div className="background"></div>
      <div className="view-box">
        <button className="info-btn" onClick={handleInfoBtn}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
        <div id="wrapper-el" className="view3d-wrapper view3d-square">
          <canvas className="view3d-canvas"/>
        </div>
      </div>
      <button className="code-btn" onClick={copyLink}>코드 복사하기</button>
    </section>
  );
}
export default Viewer;