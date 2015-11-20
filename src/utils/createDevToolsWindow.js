import React from 'react';
import ReactDom from 'react-dom';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';


export default function createDevToolsWindow(store) {
  // give it a name so it reuses the same window
  const win = window.open(null, 'redux-devtools', 'menubar=no,location=no,resizable=yes,scrollbars=no,status=no');

  // Close separate window by closing working tab
  window.onunload = () => {
    win.close();
  };

  // reload in case it's reusing the same window with the old content
  win.location.reload();

  // wait a little bit for it to reload, then render
  setTimeout(() => {
    // Wait for the reload to prevent:
    // "Uncaught Error: Invariant Violation: _registerComponent(...): Target container is not a DOM element."
    win.document.write('<div id="react-devtools-root"></div>');

    ReactDom.render(
      (
        <DebugPanel top right bottom left key="debugPanel">
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      ), win.document.getElementById('react-devtools-root'));
  }, 10);
}
