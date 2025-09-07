const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const width = 600;
  const height = 600;
  const win = new BrowserWindow({
    width,
    height,
    frame: false,
    transparent: true,
    resizable: false,
    hasShadow: false,
    backgroundColor: '#00000000',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  win.loadFile(path.join(__dirname, 'public', 'index.html'));
  win.setAlwaysOnTop(true);

  // Attempt native window shaping if supported (Electron >= 28)
  // (Optional) remove native shaping attempt for now to simplify drag reliability
}

// Manual drag implementation via IPC
let dragState = null;
ipcMain.on('drag-start', (event, { screenX, screenY }) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (!win) return;
  const [winX, winY] = win.getPosition();
  dragState = {
    win,
    offsetX: screenX - winX,
    offsetY: screenY - winY,
  };
});

ipcMain.on('drag-move', (event, { screenX, screenY }) => {
  if (!dragState) return;
  const { win, offsetX, offsetY } = dragState;
  win.setPosition(Math.round(screenX - offsetX), Math.round(screenY - offsetY));
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
