const {join} = require('path');
exports.config = {
    
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    
    }],

    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver',
        ['image-comparison',
            {
        
                baselineFolder: join(process.cwd(), './baseLineImages/'),
                formatImageName: '{tag}-{logName}',
                screenshotPath: join(process.cwd(), './actualImages/'),
                savePerInstance: true,
                autoSaveBaseline: true,
                blockOutStatusBar: true,
                blockOutToolBar: true,

            }
        ]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
}
