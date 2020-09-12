import VanillaTilt from 'vanilla-tilt';

import '../scss/style.scss';
import { initMusicTile } from './music-tile';

const initVanillaTilt = function() {
    VanillaTilt.init(document.querySelector('.tile-grid'), {
        max: 5,
        speed: 1000,
    });
};

const initApp = function() {
    initVanillaTilt();
    initMusicTile();
};

initApp();