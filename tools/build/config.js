const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');
const config = require('config');

// Get all the config options
const configJSON = config;

// Resolve the path for the file we are going to create
const file = resolve(__dirname, '..', '..', 'src', 'environments', 'config.ts');

// Write our file with the config
writeFileSync(file,
`// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
export const CONFIG = ${JSON.stringify(configJSON, null, 4)};
/* tslint:enable */
`, { encoding: 'utf-8' });

// Notify us that it was successful
console.log(`Wrote config to ${relative(resolve(__dirname, '..', '..'), file)}`);