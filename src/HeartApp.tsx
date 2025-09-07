import React from 'react';
import './HeartApp.css';

const HeartApp: React.FC = () => (
  <div className="heart-container">
    {/* Entire heart is now draggable */}
    <div className="heart-content">
      ❤️ Electron Heart ❤️
    </div>
  </div>
);

export default HeartApp;
