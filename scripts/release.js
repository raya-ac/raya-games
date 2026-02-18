#!/usr/bin/env node
/**
 * Release helper script for raya-games
 * Usage: node scripts/release.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const VERSION_PATH = path.join(__dirname, '..', 'VERSION');

function getVersion() {
  return fs.readFileSync(VERSION_PATH, 'utf8').trim();
}

function runCommand(cmd, description) {
  console.log(`\n📦 ${description}...`);
  try {
    const result = execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
    console.log('✅ Done');
    return result;
  } catch (e) {
    console.error('❌ Failed:', e.message);
    throw e;
  }
}

function main() {
  const version = getVersion();
  
  console.log('🎮 Raya Games Release Tool');
  console.log('==========================');
  console.log(`Version: ${version}`);
  console.log('');
  
  // Check if working directory is clean
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      console.log('⚠️  Warning: You have uncommitted changes:');
      console.log(status);
      console.log('');
    }
  } catch (e) {
    console.log('Not a git repository or git not available');
  }
  
  console.log('Release steps:');
  console.log('');
  console.log('1. Manual steps (do these first):');
  console.log('   - Update CHANGELOG.md with new version');
  console.log('   - Make sure all changes are committed');
  console.log('');
  console.log('2. Automated steps (run these commands):');
  console.log(`   git commit -am "Release v${version}"`);
  console.log(`   git tag -a v${version} -m "Version ${version}"`);
  console.log('   git push origin main --tags');
  console.log('');
  console.log('GitHub Actions will automatically create the release.');
}

main();
