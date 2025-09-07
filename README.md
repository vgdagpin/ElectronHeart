# Electron Heart

A frameless Electron app in React + TypeScript with a heart-shaped window.

## Features
- Frameless, transparent window
- Heart-shaped mask using CSS/SVG
- React + TypeScript UI

## Getting Started

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Build the React app:
   ```powershell
   npm run build
   ```
3. Start Electron:
   ```powershell
   npm start
   ```

## Notes
- The heart shape is achieved via CSS masking, which works best on Windows and macOS.
- For true window shaping, platform-specific Electron APIs may be required.
