// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
class ResizeObserver {
    constructor(callback) {
      this.callback = callback;
    }
  
    observe() {
      // Mock implementation of observe
    }
  
    unobserve() {
      // Mock implementation of unobserve
    }
  
    disconnect() {
      // Mock implementation of disconnect
    }
  }
  
  window.ResizeObserver = ResizeObserver;