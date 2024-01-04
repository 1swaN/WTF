import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [count, setCount] = useState(4);
  const [per, setPer] = useState(16);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loading = setInterval(animate, 50);

    function animate() {
      if (count === 100 && per === 400) {
        clearInterval(loading);
        setTimeout(() => {
          setIsVisible(false);
        }, 1500);
      } else {
        setPer((prevPer) => prevPer + 4);
        setCount((prevCount) => prevCount + 1);
      }
    }

    return () => clearInterval(loading);
  }, [count, per]);

  return (
    <div className={`loader ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="loading">
        <div className="percent">{count}%</div>
        <label className={`text ${count === 100 && per === 400 ? 'text-blink' : ''}`}>
          Completed!
        </label>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${per}px` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
