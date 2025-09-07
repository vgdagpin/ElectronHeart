import React from 'react';
import { createRoot } from 'react-dom/client';
import HeartApp from './HeartApp';

const root = createRoot(document.getElementById('root')!);
root.render(<HeartApp />);
