const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  dragStart: (screenX, screenY) => ipcRenderer.send('drag-start', { screenX, screenY }),
  dragMove: (screenX, screenY) => ipcRenderer.send('drag-move', { screenX, screenY }),
});
