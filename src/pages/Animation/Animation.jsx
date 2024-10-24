import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Animation.css';

const Animation = () => {
  const fieldWidth = 700; // ขนาดสนาม
  const fieldHeight = 400; // ขนาดสนาม
  const diameter = 150; // ขนาดลูกบอล
  const maxLeft = fieldWidth - diameter; // ขอบขวาของสนาม
  const maxTop = fieldHeight - diameter; // ขอบล่างของสนาม
  const vx = 5;
  const vy = 5;
  const rotationSpeed = 5; // ปรับความเร็วในการหมุน

  const [running, setRunning] = useState(true);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [angle, setAngle] = useState(0);
  const [ballClass, setBallClass] = useState('ball human');
  const [activeBall, setActiveBall] = useState('human'); // ติดตามบอลที่ active

  const toggleRunning = () => setRunning(!running);

  useEffect(() => {
    const process = () => {
      if (running) {
        calculatePosition();
        setAngle((prev) => prev + rotationSpeed);
      }
    };

    const calculatePosition = () => {
      // คำนวณตำแหน่งตามขอบสนาม
      if (goRight) {
        setX((prevX) => (prevX + vx >= maxLeft ? maxLeft : prevX + vx));
        if (x >= maxLeft) setGoRight(false);
      } else {
        setX((prevX) => (prevX - vx <= 0 ? 0 : prevX - vx));
        if (x <= 0) setGoRight(true);
      }

      if (goDown) {
        setY((prevY) => (prevY + vy >= maxTop ? maxTop : prevY + vy));
        if (y >= maxTop) setGoDown(false);
      } else {
        setY((prevY) => (prevY - vy <= 0 ? 0 : prevY - vy));
        if (y <= 0) setGoDown(true);
      }
    };

    const interval = setInterval(process, 25);

    return () => clearInterval(interval);
  }, [running, goRight, goDown, x, y]);

  const handleKeydown = (event) => {
    const keyActions = {
      '0': () => changeBall('none'),
      '1': () => changeBall('basketball'),
      '2': () => changeBall('football'),
      '3': () => changeBall('volleyball'),
      '4': () => changeBall('human'),
      '5': () => changeBall('cartoon'),
      '6': () => changeBall('logo'),
    };
    keyActions[event.key]?.();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  const changeBall = (ballType) => {
    setBallClass(`ball ${ballType}`);
    setActiveBall(ballType); // ตั้งค่า ball ที่ active
  };

  return (
    <div id="container">
      <div id="field" style={{ width: `${fieldWidth}px`, height: `${fieldHeight}px`, position: 'relative', margin: '0 auto' }}>
        <div className={ballClass} id="ball" style={{ left: `${x}px`, top: `${y}px`, transform: `rotate(${angle}deg)`, position: 'absolute' }}></div>
      </div>
      <div id="control" className="d-flex justify-content-between mt-3" style={{ width: `${fieldWidth}px`, margin: '0 auto' }}>
        <button id="run" className={`btn ${running ? 'btn-warning' : 'btn-success'}`} onClick={toggleRunning}>
          <span className={`bi ${running ? 'bi-pause-fill' : 'bi-play-fill'}`}></span>
          {running ? ' PAUSE' : ' RUN'}
        </button>
        <button className={`btn ${activeBall === 'none' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => changeBall('none')}>NONE</button>
        <button className={`btn ${activeBall === 'basketball' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => changeBall('basketball')}>Basketball</button>
        <button className={`btn ${activeBall === 'football' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => changeBall('football')}>Football</button>
        <button className={`btn ${activeBall === 'volleyball' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => changeBall('volleyball')}>Volleyball</button>
        <button className={`btn ${activeBall === 'human' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => changeBall('human')}>Human</button>
        <button className={`btn ${activeBall === 'cartoon' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => changeBall('cartoon')}>Cartoon</button>
        <button className={`btn ${activeBall === 'logo' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => changeBall('logo')}>Logo</button>
      </div>
    </div>
  );
};

export default Animation;
