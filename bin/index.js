#!/usr/bin/env node

const { version, release } = require('os');
const { execSync } = require('child_process');

function dye(text, colorCode = '\x1b[0m') {
  return `${colorCode}${text}\x1b[0m`;
}

const info = {
  name: {
    os: version(),
    node: 'Node.js',
    npm: 'NPM',
  },
  version: {
    os: release(),
    node: process.version.replace(/^v/, ''),
    npm: execSync('npm -v'),
  }
};

const result = `
${dye(info.name.os, '\x1b[36m')} ${dye(info.version.os)}
${dye(info.name.node, '\x1b[32m')} ${dye(info.version.node)}
${dye(info.name.npm, '\x1b[31m')} ${dye(info.version.npm)}`;

console.log(result);
