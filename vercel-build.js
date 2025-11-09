// This file helps Vercel understand how to build your Vite app
const { execSync } = require('child_process');

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Build the app
console.log('Building app...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Build completed successfully!');
