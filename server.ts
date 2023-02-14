import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

import { AppServerModule } from './src/main.server';

const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join('.', 'dist/Angular-Boilerplate/browser', 'index.html')).toString();
const win = domino.createWindow(template);
// tslint:disable-next-line:no-string-literal
global['window'] = win;
// tslint:disable-next-line:no-string-literal
global['document'] = win.document;
// tslint:disable-next-line:no-string-literal
global['DOMTokenList'] = win.DOMTokenList;
// tslint:disable-next-line:no-string-literal
global['Node'] = win.Node;
// tslint:disable-next-line:no-string-literal
global['Text'] = win.Text;
// tslint:disable-next-line:no-string-literal
global['HTMLElement'] = win.HTMLElement;
// tslint:disable-next-line:no-string-literal
global['navigator'] = win.navigator;
// tslint:disable-next-line:no-string-literal
global['MutationObserver'] = getMockMutationObserver();
function getMockMutationObserver() {
    return class {
        observe() {}
        disconnect() {}
        takeRecords() {
            return [];
        }
    };
}
// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
    const server = express();
    const distFolder = join(process.cwd(), 'dist/Angular-Boilerplate/browser');
    const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

    // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
    server.engine(
        'html',
        ngExpressEngine({
            bootstrap: AppServerModule
        })
    );

    server.set('view engine', 'html');
    server.set('views', distFolder);

    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get(
        '*.*',
        express.static(distFolder, {
            maxAge: '1y'
        })
    );

    // All regular routes use the Universal engine
    server.get('*', (req, res) => {
        res.render(indexHtml, {
            req,
            providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }]
        });
    });

    return server;
}

function run(): void {
    const port = process.env['PORT'] || 4000;

    // Start up the Node server
    const server = app();
    server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    run();
}

export * from './src/main.server';
