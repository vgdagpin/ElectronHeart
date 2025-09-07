export {};
declare global {
  interface Window {
    api?: {
      dragStart: (screenX: number, screenY: number) => void;
      dragMove: (screenX: number, screenY: number) => void;
    };
  }
}