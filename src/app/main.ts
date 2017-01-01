require('../styles/main.scss');

import { Router } from './lib/router';

let routes = new Router([
    {
        path: '/',
        template: `<h1>Home</h1><p>This is the home page.</p>`
    },
    {
        path: 'about',
        template: `<h1>About</h1><p>This is the about page. It turns out I am actually human.</p>`
        // partialUrl: 'index.html'
    }
]);