#!/usr/bin/env node
/**
 * Build script for raya-games
 * Creates distribution package
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

function getVersion() {
  return fs.readFileSync(path.join(ROOT, 'VERSION'), 'utf8').trim();
}

function clean() {
  console.log('🧹 Cleaning dist directory...');
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true });
  }
  fs.mkdirSync(DIST, { recursive: true });
}

function copyFiles() {
  console.log('📦 Copying game files...');
  
  const files = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
  files.forEach(file => {
    fs.copyFileSync(path.join(ROOT, file), path.join(DIST, file));
    console.log(`  ✓ ${file}`);
  });
  
  // Copy metadata files
  ['README.md', 'CHANGELOG.md', 'VERSION', 'package.json'].forEach(file => {
    if (fs.existsSync(path.join(ROOT, file))) {
      fs.copyFileSync(path.join(ROOT, file), path.join(DIST, file));
    }
  });
  
  console.log(`\n📊 Total games: ${files.length}`);
}

function createArchives() {
  const version = getVersion();
  console.log(`\n📦 Creating release archives for v${version}...`);
  
  try {
    // Create zip
    execSync(`cd ${DIST} && zip -r "../raya-games-v${version}.zip" .`, { stdio: 'inherit' });
    console.log(`  ✓ raya-games-v${version}.zip`);
    
    // Create tar.gz
    execSync(`cd ${DIST} && tar -czf "../raya-games-v${version}.tar.gz" .`, { stdio: 'inherit' });
    console.log(`  ✓ raya-games-v${version}.tar.gz`);
  } catch (e) {
    console.error('Failed to create archives:', e.message);
  }
}

function main() {
  console.log('🎮 Raya Games Build');
  console.log('===================\n');
  
  clean();
  copyFiles();
  
  console.log('\n✅ Build complete!');
  console.log(`Output: ${DIST}/`);
}

main();
