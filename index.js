#!/usr/bin/env node

const { version, release } = require('os');
const { execSync } = require('child_process');

function dye(text, colorCode = '\x1b[0m') {
  return `${colorCode}${text}\x1b[0m`;
}

const info = {
  os: [version(), release()],
  node: ['Node.js', process.version.replace(/^v/, '')],
  npm: ['NPM', execSync('npm -v')],
};

const result = `
${dye(info.os[0], '\x1b[36m')} ${dye(info.os[1])}
${dye(info.node[0], '\x1b[32m')} ${dye(info.node[1])}
${dye(info.npm[0], '\x1b[31m')} ${dye(info.npm[1])}`;

console.log(result);
