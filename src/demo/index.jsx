import React from 'react';
import ReactDOM from 'react-dom';

import App from '@app/demo/app';
import '@app/less/index.less';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
