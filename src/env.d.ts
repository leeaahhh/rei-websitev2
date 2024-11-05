/// <reference types="astro/client" />

declare global {
    interface Window {
      toggleCategory: (index: number) => void;
    }
  }