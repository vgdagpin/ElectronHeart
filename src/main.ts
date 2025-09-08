import { app, BrowserWindow } from 'electron';
import path from 'path';
import fs from 'fs';

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    frame: false,
    transparent: true,
    resizable: false,
    hasShadow: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
  preload: path.join(__dirname, 'preload.js'),
    },
  });

  const devServerUrl = process.env.VITE_DEV_SERVER_URL || 'http://localhost:5173';

  if (process.env.NODE_ENV !== 'production') {
    win.loadURL(devServerUrl);
  } else {
    const indexPath = path.join(__dirname, '../dist/index.html');
    if (fs.existsSync(indexPath)) {
      win.loadFile(indexPath);
    } else {
      win.loadURL(devServerUrl); // fallback
    }
  }
  win.setAlwaysOnTop(true);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
