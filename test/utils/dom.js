import jsdom from 'jsdom';

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(window);

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
  for (const key in window) {
    if (!window.hasOwnProperty(key) || key in global) {
      continue;
    }

    global[key] = window[key];
  }
}
