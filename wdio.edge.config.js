import { config } from './wdio.conf.js';


const edgeHeadlessConfig = {
    ...config,
    services: [['selenium-standalone', { chromiumedge: 'latest' }]], 
    capabilities: [{
        maxInstances: 2,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': {
            args: ['--headless']
        },
    }],

   
};

exports.config = edgeHeadlessConfig;