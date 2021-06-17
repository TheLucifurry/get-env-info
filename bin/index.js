const { version, release } = require('os');
const { execSync } = require('child_process');

const os = `${version()} ${release()}`;
const nodejs = `Node.js ${process.version}`;
const npm = `NPM v${execSync('npm -v')}`;

console.log(`Environment:\n${os}\n${nodejs}\n${npm}`);
