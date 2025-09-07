import React, { useEffect } from 'react';
import './HeartApp.css';

const HeartApp: React.FC = () => {
  useEffect(() => {
  const root = document.querySelector('.heart-root') as HTMLElement | null;
  if (!root) return;
    let dragging = false;
    const onMouseDown = (e: MouseEvent) => {
      dragging = true;
      window.api?.dragStart(e.screenX, e.screenY);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp, { once: true });
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      window.api?.dragMove(e.screenX, e.screenY);
    };
    const onMouseUp = () => {
      dragging = false;
      window.removeEventListener('mousemove', onMouseMove);
    };
  root.addEventListener('mousedown', onMouseDown as any);
    return () => {
  root.removeEventListener('mousedown', onMouseDown as any);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  return (
    <div className="heart-root">
      <div className="heart-content">
        ❤️ Electron Heart ❤️
      </div>
    </div>
  );
};


export default HeartApp;
