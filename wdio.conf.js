const process = require('process')
const url = require('./urls')
const ENV = process.env.ENV

if(!ENV || !['dev','qa','uat'].includes(ENV)){

    process.env.ENV = "qa";
    // console.log("Please enter valid Environment - qa | dev | uat")
    // process.exit()

}

const {join} = require('path');
exports.config = {

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    
    specs: [
        './test/e2eTests/*.js'
    ],
    exclude: [
    ],
    
    maxInstances: 3,
    capabilities: [{
        maxInstances: 3,
        browserName: 'chrome',
        acceptInsecureCerts: true
    
    }],

    logLevel: 'error',
    bail: 0,
    baseUrl: url[process.env.ENV], //qa/dev/uat
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone','intercept',
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
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
    
}
