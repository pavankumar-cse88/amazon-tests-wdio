const {join} = require('path');
exports.config = {
    
    specs: [
        './test/visualRegressionTests/visualTestingWithApplittols.js'
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
        ],
        ['applitools', {
            key: 'R0ugfvmH9SMYKK111zMuhFa8HJmFfGg2khvdCZAL8SlfM110', // can be passed here or via environment variable `APPLITOOLS_KEY`
            serverUrl: 'https://<org>eyesapi.applitools.com', // optional, can be passed here or via environment variable `APPLITOOLS_SERVER_URL`
            // options
            proxy: { // optional
                url: 'http://corporateproxy.com:8080',
                username: 'username', // optional
                password: 'secret', // optional
                isHttpOnly: true // optional
            },
            viewport: { // optional
                width: 1920,
                height: 1080
            }
        }]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
    
}
