#!/usr/bin/env node
/**
 * Version management script for raya-games
 * Usage: node scripts/version.js [major|minor|patch]
 */

const fs = require('fs');
const path = require('path');

const PACKAGE_PATH = path.join(__dirname, '..', 'package.json');
const VERSION_PATH = path.join(__dirname, '..', 'VERSION');

function readVersion() {
  try {
    const pkg = JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf8'));
    return pkg.version;
  } catch (e) {
    console.error('Error reading package.json:', e.message);
    process.exit(1);
  }
}

function bumpVersion(version, type) {
  const parts = version.split('.').map(Number);
  
  switch (type) {
    case 'major':
      parts[0]++;
      parts[1] = 0;
      parts[2] = 0;
      break;
    case 'minor':
      parts[1]++;
      parts[2] = 0;
      break;
    case 'patch':
    default:
      parts[2]++;
      break;
  }
  
  return parts.join('.');
}

function updateVersion(newVersion) {
  // Update package.json
  const pkg = JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf8'));
  pkg.version = newVersion;
  fs.writeFileSync(PACKAGE_PATH, JSON.stringify(pkg, null, 2) + '\n');
  
  // Update VERSION file
  fs.writeFileSync(VERSION_PATH, newVersion + '\n');
  
  console.log(`✅ Version bumped to ${newVersion}`);
  console.log('');
  console.log('Next steps:');
  console.log('  1. Update CHANGELOG.md');
  console.log(`  2. git commit -am "Bump version to ${newVersion}"`);
  console.log(`  3. git tag -a v${newVersion} -m "Version ${newVersion}"`);
  console.log('  4. git push origin main --tags');
}

const type = process.argv[2] || 'patch';
if (!['major', 'minor', 'patch'].includes(type)) {
  console.error('Usage: node scripts/version.js [major|minor|patch]');
  process.exit(1);
}

const currentVersion = readVersion();
const newVersion = bumpVersion(currentVersion, type);

console.log(`Current version: ${currentVersion}`);
console.log(`New version: ${newVersion}`);
console.log('');

updateVersion(newVersion);
